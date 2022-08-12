import { FadeWrapper, TitleWrapper } from "../../components/Wrapper";
import {
  Heading,
  Grid,
  Text,
  VStack,
  List,
  ListItem,
  ListIcon,
  Box,
  HStack,
  Circle,
  Flex,
  Badge,
  Select,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import Head from "next/head";
import { PrimaryButton, SecondaryButton } from "../../components/Button/";

const Experiences = () => {
  return (
    <>
      <Head>
        <title>Experience</title>
      </Head>
      <FadeWrapper>
        {" "}
        <TitleWrapper>
          <Heading fontSize={{ base: "2xl", lg: "5xl" }}>Experience</Heading>
          <Text fontSize={{ lg: "1.5rem", base: "16px" }}>
            That i have taken part of.
          </Text>
        </TitleWrapper>
        <Grid
          mt="2em"
          gridTemplateColumns={{ lg: "1fr 2fr", base: "1fr" }}
          gap={{ lg: "5em", base: "1em" }}
          width="100%"
          pb="3em"
        >
          <Select
            backgroundColor={"primary.900"}
            borderColor={"secondary.900"}
            _focus={{ borderColor: "secondary.900" }}
            _hover={{ borderColor: "secondary.900" }}
            display={{ base: "block", lg: "None" }}
          >
            <option
              style={{ backgroundColor: "#100720" }}
              value={"Lorem ipsum"}
            >
              Lorem Ipsum
            </option>
            <option
              value={"Lorem ipsum"}
              style={{ backgroundColor: "#100720" }}
            >
              Lorem Ipsum
            </option>
            <option
              style={{ backgroundColor: "#100720" }}
              value={"Lorem ipsum"}
            >
              Lorem Ipsum
            </option>
          </Select>
          <VStack
            display={{ base: "None", lg: "flex" }}
            alignItems={"stretch"}
            borderRight={{ lg: "2px solid white" }}
            borderBottom={{ lg: "none", base: "2px solid white" }}
            pr={{ lg: "3em" }}
            pb={{ base: "2em" }}
          >
            
            <SecondaryButton justifyContent="start">
              1. Lorem Ipsum{" "}
            </SecondaryButton>
            <SecondaryButton justifyContent="start">
              2. Lorem Ipsum{" "}
            </SecondaryButton>
            <SecondaryButton justifyContent="start">
              3. Lorem Ipsum{" "}
            </SecondaryButton>
          </VStack>
          <VStack gap={"0.5em"} mt={{ base: "1em" }} alignItems={"start"}>
            <Flex
              w={"100%"}
              alignItems="center"
              justifyContent={"space-between"}
            >
              <Heading fontSize={{ base: "17px", lg: "3xl" }}>
                Software Engineer
              </Heading>
              <PrimaryButton>Detail</PrimaryButton>
            </Flex>
            <Text fontSize={"xl"}>@Company</Text>
            <Text as={"i"}>January 2020 - February 2021 </Text>

            <Text maxW={"80ch"}>
              Short description of what the company is about. Then, write down
              what you are doing during those period of time, be it sleeping,
              watching, or even doing the real work.
            </Text>
            <Box>
              My contribution :
              <List mt="1em" spacing={3} pl="1em">
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  Assumenda, quia temporibus eveniet a libero incidunt suscipit
                </ListItem>
              </List>
            </Box>
            <Box>
              Honorable mention teammates :
              <HStack>
                <Circle w="50px" h="50px" bgColor={"gray"} />{" "}
                <Circle w="50px" h="50px" bgColor={"gray"} />{" "}
                <Circle w="50px" h="50px" bgColor={"gray"} />
              </HStack>
            </Box>
          </VStack>
        </Grid>
      </FadeWrapper>
    </>
  );
};

export default Experiences;
