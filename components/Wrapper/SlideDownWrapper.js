import { Box, Text, keyframes, Container } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Suspense } from "react";

const animationKeyframes = keyframes`
  0% { transform: translateY(-100%); opacity: 0; }
  50% { transform: translateY(-0%); opacity: 1; }
    60% { transform: translateY(0%); opacity: 1; }
  80% { transform: translateY(60%); opacity: 0; }
  100% { transform:translateY(100%);opacity: 0; }
`;

const animation = `${animationKeyframes} 1.5s ease-in-out infinite`;

export const SlideDownWrapper = ({ children, ...props }) => {
  return (
    <Box
      as={motion.div}
      animation={animation}
      display="inline-block"
      padding="2"
    >
      {children}
    </Box>
  );
};
