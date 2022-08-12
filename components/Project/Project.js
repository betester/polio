import {
  VStack,
  Flex,
  Heading,
  Text,
  Badge,
  HStack,
  Box,
  Image,
  List,
  ListItem,
  Tooltip,
  ListIcon,
  CheckCircleIcon,
  Avatar,
} from "@chakra-ui/react";
import { STATUSES } from "../../constant/Project";
import { PrimaryButton } from "../Button";
import { FadeWrapper } from "../Wrapper";

export const Project = ({
  title = "Name of the Project",
  date = "2021 January - 2022 February",
  status = "Completed",
  contributions,
  techStacks,
  description,
}) => {
  return (
    <FadeWrapper>
      <VStack pr="1em" gap={"0.5em"} mt={{ base: "1em" }} alignItems={"start"}>
        <Flex w={"100%"} alignItems="center" justifyContent={"space-between"}>
          <Heading fontSize={{ base: "17px", lg: "3xl" }}>{title}</Heading>
          <PrimaryButton>Detail</PrimaryButton>
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
              {contributions?.map((contribution) => {
                return (
                  <ListItem>
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
              {techStacks?.map((techStack) => (
                <Avatar background={"white"} src={techStack} />
              ))}
            </HStack>
          </Box>
        )}
      </VStack>
    </FadeWrapper>
  );
};
