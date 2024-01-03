import { Flex, Box, Text, VStack, Divider } from "@chakra-ui/react";
import { ExperienceItem } from "./Item";

export const ExperienceContainer = ({ data, date }) => {
  return (
    <VStack
      w="100%"
      p={{ lg: "0 6em" }}
      gap="0.5em"
      alignItems={"start"}
    >
      <Flex ml={{ lg: "-3em", base: "-2em" }} alignItems={"center"} w="100%">
        <Text minW="100px">{date}</Text>
        <Divider />
      </Flex>
      <VStack
        alignItems={"start"}
        marginLeft="1em"
        w="100%"
        borderLeft={"1px solid white"}
      >
        <Flex alignItems={"center"} position="relative" w="100%">
          <Box mt="1em" ml="3em" w="100%">
            {data.map((experience, index) => {
              return <ExperienceItem key={index} datum={experience} />;
            })}
          </Box>
        </Flex>
      </VStack>
    </VStack>
  );
};
