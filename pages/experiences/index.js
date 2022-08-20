import {
  Box,
  Divider,
  Flex,
  Heading,
  Text,
  VStack,
  List,
  ListItem,
  ListIcon,
  Avatar,
  Badge,
} from "@chakra-ui/react";
import { FadeWrapper, TitleWrapper } from "../../components/Wrapper";
import { SecondaryButton } from "../../components/Button/SecondaryButton";
import { CheckCircleIcon } from "@chakra-ui/icons";

const Experiences = () => {
  return (
    <FadeWrapper>
      <VStack w="100%" gap="3em">
        <TitleWrapper textAlign="center">
          <Heading fontSize={{ base: "2xl", lg: "5xl" }}>Experiences</Heading>
          <Text fontSize={{ lg: "1.2rem", base: "16px" }}>
            That i have taken part of.
          </Text>
        </TitleWrapper>
        <SecondaryButton alignSelf="end">2022</SecondaryButton>
      </VStack>
      <VStack
        mt="1em"
        w="100%"
        p={{ lg: "0 6em" }}
        gap="0.5em"
        alignItems={"start"}
      >
        <Flex ml={{ lg: "-3em", base: "-2em" }} alignItems={"center"} w="100%">
          <Text minW="100px">2022 January</Text>
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
              <Flex
                alignItems={{ lg: "center", base: "start" }}
                flexDir={{ lg: "row", base: "column" }}
                justifyContent="space-between"
              >
                <Avatar
                  position="absolute"
                  bg="white"
                  left="-1.3em"
                  src={"/itf.svg"}
                />

                <Heading fontSize={{ base: "17px", lg: "2xl" }}>
                  {"Junior Developer @ITF"}
                </Heading>
                <Text>6 months</Text>
              </Flex>
              <Text mt="0.3em">
                one of {"FUKI's"} bureau. Act as mantainer for FUKI technology,
                mainly websites.
              </Text>

              <List mt="0.3em" ml="1em">
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  Create 404 page on mentoring web.
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  Create landing page on web FUKI.
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  Create rest api on web mentoring using django restframework.
                </ListItem>
              </List>
            </Box>
          </Flex>
        </VStack>
      </VStack>
      <VStack
        mt="1em"
        w="100%"
        p={{ lg: "0 6em" }}
        gap="0.5em"
        alignItems={"start"}
      >
        <Flex ml={{ lg: "-3em", base: "-2em" }} alignItems={"center"} w="100%">
          <Text minW="100px" display={"inline-block"}>
            2022 January
          </Text>
          <Divider />
        </Flex>
        <VStack alignItems={"start"} w="100%" borderLeft={"1px solid white"}>
          <Flex alignItems={"center"} position="relative" w="100%">
            <Box mt="1em" ml="3em" w="100%">
              <Flex
                alignItems={{ lg: "center", base: "start" }}
                flexDir={{ lg: "row", base: "column" }}
                justifyContent="space-between"
              >
                <Avatar
                  position="absolute"
                  bg="white"
                  left="-1.3em"
                  src={"/itf.svg"}
                />

                <Heading fontSize={{ base: "17px", lg: "2xl" }}>
                  {"Junior Developer @ITF"}
                </Heading>
                <Text>6 months</Text>
              </Flex>
              <Text mt="0.3em">
                one of {"FUKI's"} bureau. Act as mantainer for FUKI technology,
                mainly websites.
              </Text>

              <List mt="0.3em" ml="1em">
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  Create 404 page on mentoring web.
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  Create landing page on web FUKI.
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  Create rest api on web mentoring using django restframework.
                </ListItem>
              </List>
            </Box>
          </Flex>
        </VStack>
      </VStack>
    </FadeWrapper>
  );
};

export default Experiences;
