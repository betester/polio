import { Box, ListItem, OrderedList, Text } from "@chakra-ui/react";
import { Img } from "@chakra-ui/react";

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
  ["image", (src) => <Img w="100%" src={src} alt={src} />],
  [
    "numbered_list_item",
    (data) => {
      <OrderedList>
        {data.map((datum, index) => (
          <ListItem key={index}>{datum["rich_text"][0]["plain_text"]}</ListItem>
        ))}
      </OrderedList>;
    },
  ],
]);

const getBlockData = (block) => {
  switch (block["type"]) {
    case "image":
      return block["image"]["file"]["url"];

    case "numbered_list_item":
      console.log(block["numbered_list_item"]);
      return block["numbered_list_item"];

    default:
      return block[block["type"]]["rich_text"]?.[0]?.plain_text;
  }
};

export const renderBlockComponent = (block) => {
  const blockComponent = COMPONENT_MAP.get(block["type"]);
  const data = getBlockData(block);
  return blockComponent && blockComponent(data);
};
