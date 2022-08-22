import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    900: "#100720",
    800: "#31087B",
  },
  secondary: { 900: "#FFC23C" },
};

const config = {
  initialColorMode: "dark",
};

export const theme = extendTheme({ colors: colors, config: config });
