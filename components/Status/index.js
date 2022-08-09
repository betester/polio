import { Box, Flex } from "@chakra-ui/react";

const STATUSES_COLOR = {
  completed: "green.500",
  "on going": "orange",
  unfinished: "red",
};

export const Status = ({ status, children }) => {
  return (
    <Flex alignItems={"center"}>
      Status:
      <Box
        ml={'10px'}
        borderRadius={"10px"}
        bgColor={STATUSES_COLOR[status.toLowerCase()]}
        p="0.5em"
      >
        {children}
      </Box>
    </Flex>
  );
};
