import {
  Flex,
  Heading,
  StackDivider,
  Text,
  VStack,
  Code,
  Box,
} from "@chakra-ui/react";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { FadeWrapper, TitleWrapper } from "../components/Wrapper";
import { SecondaryButton } from "../components/Button/SecondaryButton";
import { SlideDownWrapper } from "../components/Wrapper/SlideDownWrapper";
import { ABOUT_ME_DATA } from "../constant/About Me";
import { changeWord } from "../utils/scrambleWord";

export default function Home() {
  const [aboutMe, setAboutMe] = useState(false);
  const RANDOM_CHARACTER = ["R", "a", "n", "d", "o", "m"];
  const [random, setRandom] = useState(RANDOM_CHARACTER);
  const randomRefs = [
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
  ];
  const [isRolling, setIsRolling] = useState(false);

  const roll = () => {
    setIsRolling(true);
    setTimeout(() => {
      setIsRolling(false);
    }, 700);

    const newRandom = [];

    randomRefs.forEach((ref) => {
      const selected = randomRotation(ref.current);
      newRandom.push(selected);
    });

    setRandom(newRandom);
  };

  const randomRotation = (ref) => {
    const children = ref.children;
    const randomIndex = Math.floor(Math.random() * RANDOM_CHARACTER.length);
    const chosenChild = children[randomIndex];
    ref.style.top = `${-chosenChild.offsetTop}px`;
    return RANDOM_CHARACTER[randomIndex];
  };


  return (
    <Flex
      alignItems={!aboutMe && "center"}
      h={!aboutMe && "100%"}
      pb="1em"
      w="100%"
    >
      <Head>
        <title>Hello There!</title>
      </Head>
      {!aboutMe && (
        <FadeWrapper userSelect={"none"}>
          <TitleWrapper display="flex" alignItems="center">
            <Heading fontSize={{ base: "3xl", lg: "5xl" }}>
              Hi {"I'm"} Ikram <br /> I{" "}
              <Code colorScheme="yellow" fontSize={{ base: "3xl", lg: "5xl" }}>
                {"<Code/>"}
              </Code>{" "}
              {randomRefs.map((ref, refIndex) => {
                return (
                  <Box
                    key={refIndex}
                    position={"relative"}
                    display={"inline-block"}
                    overflow={"hidden"}
                    w={{ lg: "50px", base: "30px" }}
                    h={{ lg: "50px", base: "33px" }}
                    tran
                  >
                    <Box
                      transition="top ease-in-out 0.5s"
                      position={"absolute"}
                      ref={ref}
                      top="0"
                    >
                      {RANDOM_CHARACTER.map((_, charIndex) => (
                        <Box key={charIndex}>
                          {RANDOM_CHARACTER[(refIndex + charIndex) % 6]}
                        </Box>
                      ))}
                    </Box>
                  </Box>
                );
              })}
              <Text>Stuff </Text>
            </Heading>
          </TitleWrapper>
          <VStack alignItems={"start"}>
            <SecondaryButton
              callback={() => {
                setAboutMe(true);
              }}
            >
              About me
            </SecondaryButton>
            <SecondaryButton
              callback={() => {
                roll();
              }}
            >
              {!isRolling && "I'm Feeling Lucky Today!"}
              {isRolling && "Rolling"}
            </SecondaryButton>
          </VStack>
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
