import { Flex, HStack, Tag, Text, VStack } from "@chakra-ui/react";
import moment from "moment";

export const Thumbnail = ({ title, date, summary, tags, slug, status }) => {
  return (
    <VStack gap="0.2em" alignItems={"start"} w={{ lg: "80%", base: "100%" }}>
      <Flex
        justifyContent={"space-between"}
        w="100%"
        flexDirection={{ base: "column", lg: "row" }}
      >
        <Text maxW="45ch" fontWeight={"bold"} fontSize={"1.5rem"}>
          {title["results"][0]["title"]["plain_text"]}
        </Text>
        <Text>{moment(date["date"]["start"]).format("MMMM, Do YYYY")}</Text>
      </Flex>
      <Text>{summary["results"][0]["rich_text"]["plain_text"]}</Text>
      <HStack>
        {tags["multi_select"].map((tag, index) => {
          return (
            <Tag
              key={index}
              size={"md"}
              variant="subtle"
              colorScheme={tag["color"] || "gray"}
            >
              {tag["name"]}
            </Tag>
          );
        })}
      </HStack>
    </VStack>
  );
};
