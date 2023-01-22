import { Box, Flex } from "@chakra-ui/react";
import { Navbar } from "./Navbar";

export const Layout = ({ children }) => {
  return (
    <Box
      bgColor={"primary.900"}
      w={"100%"}
      color="white"
      p={{ base: "2em 1.2em", lg: "2em 3em" }}
      overflow={"auto"}
    >
      <Navbar />
      <Box h={"100%"} w={"100%"} p={{ lg: "4em 3em", base: "5em 0" }}>
        {children}
      </Box>
    </Box>
  );
};
