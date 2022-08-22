import { Flex, HStack, Tag, Text, VStack } from "@chakra-ui/react";
import moment from "moment";
import Link from "next/link";

export const Thumbnail = ({
  title,
  date,
  summary,
  tags,

  pageId,
}) => {
  return (
    <Link href={`/blog/${pageId}`}>
      <VStack cursor="pointer" gap="0.2em" alignItems={"start"} w="100%">
        <Flex
          justifyContent={"space-between"}
          w="100%"
          flexDirection={{ base: "column", lg: "row" }}
        >
          <Text maxW="45ch" fontWeight={"bold"} fontSize={"1.5rem"}>
            {title["results"][0]["title"]["plain_text"]}
          </Text>
          <Text color={"#f6f6f6"} fontWeight="light">
            {moment(date["date"]["start"]).format("MMMM, Do YYYY")}
          </Text>
        </Flex>
        <Text color={"#f6f6f6"} fontWeight="light">
          {summary["results"][0]["rich_text"]["plain_text"]}
        </Text>
        <HStack wrap={"wrap"}>
          {tags["multi_select"].map((tag, index) => {
            return (
              <Tag
                m="0.3em"
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
    </Link>
  );
};
