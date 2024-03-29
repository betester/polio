import {
  VStack,
  Flex,
  Heading,
  Text,
  Badge,
  HStack,
  Box,
  List,
  ListItem,
  Tooltip,
  ListIcon,
  Avatar,
  Link
} from "@chakra-ui/react";
import { STATUSES } from "../../constant/Project";
import { FadeWrapper } from "../Wrapper";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { SecondaryButton } from "../Button";

export const Project = ({
  title = "Name of the Project",
  date = "2021 January - 2022 February",
  status = "Completed",
  contributions,
  techStacks,
  description,
  link
}) => {
  return (
    <FadeWrapper>
      <VStack pr="1em" gap={"0.5em"} mt={{ base: "1em" }} alignItems={"start"}>
        <Flex w={"100%"} alignItems="center" justifyContent={"space-between"}>
          <Heading fontSize={{ base: "17px", lg: "3xl" }}>
            {title}
          </Heading>
          {
            link && <SecondaryButton href={link} isExternal>
              See Project
            </SecondaryButton>
          }
        </Flex>
        <Text as={"i"}>{date}</Text>
        <Text maxW={"80ch"}>{description}</Text>
        <Text fontWeight={"bold"}>
          Status
          <Tooltip label={STATUSES[status]["tooltipMessage"]}>
            <Badge colorScheme={STATUSES[status]["color"]} ml="0.5em">
              {status}
            </Badge>
          </Tooltip>
        </Text>
        {status !== "On Review" && (
          <Box>
            <Text fontWeight={"bold"}>My Contribution</Text>

            <List mt="1em" spacing={3} pl="1em">
              {contributions?.map((contribution, index) => {
                return (
                  <ListItem key={index}>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    {contribution}
                  </ListItem>
                );
              })}
            </List>
          </Box>
        )}
        {status !== "On Review" && (
          <Box>
            <Text fontWeight={"bold"}>Tech Stack</Text>
            <HStack mt="1em">
              {techStacks?.map((techStack, index) => (
                <Avatar size="md" key={index} background={"white"} src={techStack} />
              ))}
            </HStack>
          </Box>
        )}
      </VStack>
    </FadeWrapper>
  );
};
