import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

const theme = extendTheme({ config });

export default theme;

// import { ChakraTheme, extendTheme, theme } from "@chakra-ui/react";

// const config: ChakraTheme = {
//   ...theme,
//   config: {
//     useSystemColorMode: false,
//     initialColorMode: "dark",
//   },
//   styles: {
//     global: {
//       body: {
//         height: "100vh",
//       },
//     },
//   },
// };

// const siema = extendTheme(config);

// export default siema;
