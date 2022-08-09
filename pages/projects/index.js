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
} from "@chakra-ui/react";
import { SecondaryButton } from "../../components/Button/SecondaryButton";
import { Status } from "../../components/Status";
import { CheckCircleIcon } from "@chakra-ui/icons";
import Head from "next/head";


const Projects = () => {
  return (
    <>
    <Head>
        <title>Projects</title>
    </Head>
      <FadeWrapper>
        {" "}
        <TitleWrapper>
          <Heading fontSize={"5xl"}>Projects</Heading>
          <Text fontSize={"1.5rem"}>
            That i have been working/contributed on
          </Text>
        </TitleWrapper>
        <Grid mt="2em" gridTemplateColumns={"1fr 2fr"} gap="5em" width="100%">
          <VStack
            alignItems={"stretch"}
            borderRight="2px solid white"
            pr={"3em"}
          >
            <SecondaryButton active justifyContent="start">
              1. Lorem Ipsum{" "}
            </SecondaryButton>
            <SecondaryButton justifyContent="start">
              2. Lorem Ipsum{" "}
            </SecondaryButton>
            <SecondaryButton justifyContent="start">
              3. Lorem Ipsum{" "}
            </SecondaryButton>
          </VStack>
          <VStack gap={"0.5em"} alignItems={"start"}>
            <Heading>Name of the Project</Heading>
            <Text as={"i"}>January 2020 - February 2021 </Text>
            <Text maxW={"80ch"}>
              This is a short description of what the project is all about, it
              has to be clickbaitable that people would be interested looking on
              it.
            </Text>
            <Status status={"completed"}>Completed </Status>
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
              Tech Stack :
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

export default Projects;
