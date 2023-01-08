import { Box, ListItem, OrderedList, Text, Flex } from "@chakra-ui/react";
import { Img } from "@chakra-ui/react";
import Latex from "react-latex-next";
import "katex/dist/katex.min.css";

const renderParagraph = (data) => {
  if (!data) return;
  const texts = [];
  for (let i = 0; i < data.length; i++) {
    switch (data[i]["type"]) {
      case "equation":
        texts.push(`$${data[i].plain_text}$`);
        break;
      default:
        texts.push(data[i].plain_text);
    }
  }
  return <Latex>{texts.join(" ")}</Latex>;
};

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
  [
    "paragraph",
    (data) => {
      return <>{renderParagraph(data)}</>;
    },
  ],
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
      return (
        <OrderedList>
          {data.map((datum, index) => (
            <ListItem key={index}>
              {datum["rich_text"][0]["plain_text"]}
            </ListItem>
          ))}
        </OrderedList>
      );
    },
  ],
  [
    "equation",
    (data) => {
      return <Latex>${data}$</Latex>;
    },
  ],
]);

const getBlockData = (block) => {
  switch (block["type"]) {
    case "image":
      return block["image"]["file"]["url"];

    case "numbered_list_item":
      return block["numbered_list_item"];

    case "equation":
      return block["equation"]["expression"];

    case "paragraph":
      return block["paragraph"]["rich_text"];

    default:
      return block[block["type"]]["rich_text"]?.[0]?.plain_text;
  }
};

export const renderBlockComponent = (block) => {
  const blockComponent = COMPONENT_MAP.get(block["type"]);
  const data = getBlockData(block);
  return blockComponent && blockComponent(data);
};
