import {
  Flex,
  Heading,
  StackDivider,
  Text,
  VStack,
  Code,
} from "@chakra-ui/react";
import Head from "next/head";
import { useEffect, useState } from "react";
import { FadeWrapper, TitleWrapper } from "../components/Wrapper";
import { SecondaryButton } from "../components/Button/SecondaryButton";
import { SlideDownWrapper } from "../components/Wrapper/SlideDownWrapper";
import { ABOUT_ME_DATA } from "../constant/About Me";
import { changeWord } from "../utils/scrambleWord";

export default function Home() {
  const [aboutMe, setAboutMe] = useState(false);
  const [random, setRandom] = useState("Random");

  useEffect(() => {
    let time = setTimeout(() => {
      setRandom(changeWord(random));
    }, 1500);
    return () => {
      clearTimeout(time);
    };
  }, [random]);

  return (
    <Flex
      alignItems={!aboutMe && "center"}
      h={!aboutMe && "100%"}
      justifyContent={"center"}
      pb="1em"
      w="100%"
    >
      <Head>
        <title>Hello There!</title>
      </Head>
      {!aboutMe && (
        <FadeWrapper userSelect={"none"}>
          <TitleWrapper>
            <Heading fontSize={{ base: "3xl", lg: "5xl" }}>
              Hi {"I'm"} Ikram <br /> I{" "}
              <Code colorScheme="yellow" fontSize={{ base: "3xl", lg: "5xl" }}>
                {"<Code/>"}
              </Code>{" "}
              <Text display={"inline"}>
                <SlideDownWrapper> {random} </SlideDownWrapper>
              </Text>
              Stuff{" "}
            </Heading>
          </TitleWrapper>
          <SecondaryButton
            callback={() => {
              setAboutMe(true);
            }}
          >
            About me
          </SecondaryButton>
        </FadeWrapper>
      )}
      {aboutMe && (
        <FadeWrapper
          w="100%"
          display="flex"
          flexDir="column"
          alignItems="center"
        >
          <TitleWrapper>
            <Heading fontSize={{ base: "3xl", lg: "5xl" }}>About me</Heading>
          </TitleWrapper>
          <Flex alignItems={"center"}>
            <VStack
              mt="1em"
              gap="0.5em"
              alignItems={"start"}
              divider={<StackDivider />}
            >
              {ABOUT_ME_DATA.map((data) => (
                <>
                  <Text fontWeight={"500"} fontSize={"2xl"}>
                    {data.title}
                  </Text>
                  {data.contents.map((content, index) => (
                    <Text key={index} maxW={"90ch"} lineHeight={"1.7"}>
                      {content}
                    </Text>
                  ))}
                </>
              ))}
              <SecondaryButton
                callback={() => {
                  setAboutMe(false);
                }}
              >
                Go back
              </SecondaryButton>
            </VStack>
          </Flex>
        </FadeWrapper>
      )}
    </Flex>
  );
}
