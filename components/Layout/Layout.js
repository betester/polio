import { Box, Flex } from "@chakra-ui/react";
import { Navbar } from "./Navbar";

export const Layout = ({ children }) => {
  return (
    <Box bgColor={"primary.900"} w={"100%"} color="white" p="2em 3em">
      <Navbar />
      <Flex alignItems={"center"} h={"80%"} w={"100%"} pt="1em">
        {children}
      </Flex>
    </Box>
  );
};
