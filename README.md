## Slideshow

## Description

- This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).
- It uses [Tamagui](https://tamagui.dev/)
- The application is generated in [TypeScript](https://www.typescriptlang.org/).

## Pre-requisites

- [git](https://git-scm.com/) - v2.13 or greater
- [NodeJS](https://nodejs.org/en/) - v18 or greater
- [npm](https://www.npmjs.com/) - v10 or greater

You might need more tools depending on what you're building for. See [Expo docs](https://docs.expo.dev/get-started/set-up-your-environment/) for how to set up your environment.

## Additional instructions

- In case you get any errors or warnings related to dependency versions, run `npx expo install --fix` to make sure all the dependencies' versions match with the expo sdk version in use

## Getting Started

```bash
cd /path/to/slidshow
npm install
npm start
```

then follow the on-screen steps.

## Folder Structure

```
.
├── assets ---------------------- Static assets folder
│   └── images ------------------ Contains all images
│   └── fonts ------------------- Font resources
├── src
│   ├── app --------------------- Contains the app's navigation (file-based).
│   │   ├── +html.tsx
│   │   ├── +not-found.tsx
│   │   ├── _layout.tsx
│   │   ├── index.tsx
│   │   └── <screen>
│   │       ├── _layout.tsx
│   │       └── index.tsx
│   ├── components -------------- Contains reusable components.
│   ├── hooks ------------------- Custom hooks.
│   ├── provider ---------------- Providers for theme and safe area.
│   ├── styles ------------------ CSS for the web.
│   └── theme ------------------- Tamagui theme tokens.
│       ├── radius.ts
│       ├── size.ts
│       ├── space.ts
│       ├── color.ts
│       └── index.ts
├── tamagui.config.ts ----------- Manages everything from theme to fonts
├── README.md ------------------- This file!
├── app.json -------------------- Expo config
├── tsconfig.json
├── package.json
└── babel.config.js
```

## Checking the entire app at once

Navigate to all the screens from a single place by changing the `pathname` in `Redirect` inside the `index.tsx` file to `app-navigation`.

## License

MIT License

Copyright (c) 2024 DhiWise

Permission is hereby granted to any person obtaining a copy of this software and associated documentation files (the "Software"),to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

