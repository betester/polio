import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const FadeWrapper = ({ children,...props }) => {
  return (
    <Box
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition="250ms linear"
      w="100%"
      {...props}
    >
      {children}
    </Box>
  );
};
