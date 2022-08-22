import { Box, Text } from "@chakra-ui/react";

const COMPONENT_MAP = new Map([
  [
    "heading_1",
    (chidlren) => (
      <Text fontWeight={"bold"} fontSize={"3xl"}>
        {chidlren}
      </Text>
    ),
  ],
  [
    "heading_2",
    (children) => (
      <Text fontWeight={"bold"} fontSize={"2xl"}>
        {children}
      </Text>
    ),
  ],
  [
    "heading_3",
    (children) => (
      <Text fontWeight={"bold"} fontSize={"xl"}>
        {children}
      </Text>
    ),
  ],
  ["paragraph", (children) => <Text color="#f6f6f6">{children}</Text>],
  [
    "code",
    ({ children }) => (
      <Box bgColor={"#f6f6f6"} color="black" p="2em">
        {children}
      </Box>
    ),
  ],
]);

export const renderBlockComponent = (block) => {
  const blockComponent = COMPONENT_MAP.get(block["type"]);
  return (
    blockComponent &&
    blockComponent(block[block["type"]]["rich_text"]?.[0]?.plain_text)
  );
};
