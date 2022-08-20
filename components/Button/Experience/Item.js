import {
  Flex,
  Avatar,
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

export const ExperienceItem = ({ datum }) => {
  return (
    <>
      <Flex
        alignItems={{ lg: "center", base: "start" }}
        flexDir={{ lg: "row", base: "column" }}
        justifyContent="space-between"
      >
        <Avatar position="absolute" bg="white" left="-1.3em" src={datum.icon} />

        <Heading fontSize={{ base: "17px", lg: "2xl" }}>
          {`${datum.position} @${datum.name}`}
        </Heading>
        <Text>{datum.duration}</Text>
      </Flex>
      <Text mt="0.3em">{datum.description}</Text>

      <List mt="0.3em" ml="1em">
        {datum.contributions.map((contribution, index) => (
          <ListItem key={index}>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            {contribution}
          </ListItem>
        ))}
      </List>
    </>
  );
};
