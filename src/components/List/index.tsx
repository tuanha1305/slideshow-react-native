import React from "react";
import { FlatListProps, LayoutChangeEvent, FlatList } from "react-native";

type FP<T> = FlatListProps<T>;

type CustomRenderItem<T> = (
  info: Parameters<NonNullable<FP<T>["renderItem"]>>["0"],
  style: FP<T>["style"],
) => ReturnType<NonNullable<FP<T>["renderItem"]>>;

type Props<T> = Omit<FP<T>, "renderItem"> & {
  gap?: number;
  columnGap?: number;
  rowGap?: number;
  renderItem: CustomRenderItem<T>;
  data: T[];
};

/** Same as FlatList, but doubles as a grid when `numColumns` is provided. */
const List = React.forwardRef(function List<T>(
  {
    gap,
    columnGap,
    rowGap,
    onLayout,
    renderItem,
    numColumns = 1,
    contentContainerStyle,
    columnWrapperStyle,
    ...props
  }: Props<T>,
  ref: React.Ref<FlatList<T>>,
) {
  const [width, setWidth] = React.useState<number>();

  const _onLayout = React.useCallback(
    (event: LayoutChangeEvent) => {
      if (numColumns <= 1) return onLayout?.(event);

      const containerWidth = event.nativeEvent.layout.width;
      const mainGap = columnGap ?? gap ?? 0;
      const itemWidth = (containerWidth - (numColumns - 1) * mainGap) / numColumns;
      setWidth(itemWidth);

      onLayout?.(event);
    },
    [columnGap, gap, onLayout],
  );

  const _columnWrapperStyle = numColumns > 1 ? [{ rowGap, columnGap, gap }, columnWrapperStyle] : undefined;
  const _contentContainerStyle = [{ rowGap, columnGap, gap }, contentContainerStyle];
  const style = numColumns > 1 ? { maxWidth: width } : undefined;

  return (
    <FlatList
      ref={ref}
      onLayout={_onLayout}
      columnWrapperStyle={_columnWrapperStyle}
      contentContainerStyle={_contentContainerStyle}
      numColumns={numColumns}
      renderItem={(info) => renderItem(info, style)}
      {...props}
    />
  );
}) as <T>(props: Props<T> & { ref?: React.Ref<FlatList<T>> }) => JSX.Element; // due to a ts limitation passing a generic component to `forwardRef` loses the generic type. so we have to cast it. see https://stackoverflow.com/a/58473012;

export default List;
