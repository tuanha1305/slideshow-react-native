import { useFonts } from "expo-font";

const useAppFonts = () => {
  const [loaded] = useFonts({
    PoppinsSemiBold: require("../../assets/fonts/PoppinsSemiBold.ttf"),
    PoppinsMedium: require("../../assets/fonts/PoppinsMedium.ttf"),
    PoppinsRegular: require("../../assets/fonts/PoppinsRegular.ttf"),
  });

  return loaded;
};

export default useAppFonts;
