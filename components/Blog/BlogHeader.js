import { Heading, HStack, Tag, Text } from "@chakra-ui/react";
import moment from "moment";

export const BlogHeader = ({ title, date, tags }) => {
  return (
    <>
      <Text maxW="45ch" fontWeight={"bold"} fontSize={"3rem"}>
        {title["results"][0]["title"]["plain_text"]}
      </Text>
      <Text color={"#f6f6f6"} fontWeight="light">
        {moment(date["date"]["start"]).format("MMMM, Do YYYY")}
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
    </>
  );
};
