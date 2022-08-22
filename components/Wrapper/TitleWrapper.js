import { Box } from "@chakra-ui/react";

export const TitleWrapper = ({ children, ...props }) => {
  return (
    <Box
      borderLeft={{ lg: "1em white solid", base: "0.3em white solid" }}
      pl="0.6em"
      {...props}
    >
      {children}
    </Box>
  );
};
