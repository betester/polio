import { Flex, Heading, StackDivider, Text, VStack } from "@chakra-ui/react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import { Code } from "@chakra-ui/react";
import { FadeWrapper, TitleWrapper } from "../components/Wrapper";
import { SecondaryButton } from "../components/Button/SecondaryButton";
import { useRouter } from "next/router";

export default function Home() {
  const [aboutMe, setAboutMe] = useState(false);
  const [random, setRandom] = useState("Random");
  const router = useRouter();

  const changeWord = (word) => {
    let newWord = "";
    const usedChar = new Set();
    while (newWord.length < word.length) {
      const randomIndex = Math.random() * word.length;
      const randomChar = word.charAt(randomIndex);

      if (!usedChar.has(randomChar)) {
        newWord += randomChar;
        usedChar.add(randomChar);
      }
    }

    return newWord;
  };

  return (
    <Flex alignItems={!aboutMe && "center"} height="100%">
      <Head>
        <title>Home</title>
      </Head>
      {!aboutMe && (
        <FadeWrapper userSelect={"none"}>
          <TitleWrapper>
            <Heading fontSize={{ base: "3xl", lg: "5xl" }}>
              Hi I'm Ikram <br /> I{" "}
              <Code colorScheme="yellow" fontSize={{ base: "3xl", lg: "5xl" }}>
                {"<Code/>"}
              </Code>{" "}
              <Text
                onMouseEnter={() => {
                  setRandom(changeWord("Random"));
                }}
                onMouseLeave={() => {
                  setRandom("Random");
                }}
                display={"inline"}
              >
                {random}{" "}
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
        <FadeWrapper>
          <TitleWrapper>
            <Heading fontSize={{ base: "3xl", lg: "5xl" }}>About me</Heading>
          </TitleWrapper>
          <VStack
            mt="1em"
            gap="0.5em"
            alignItems={"start"}
            divider={<StackDivider />}
          >
            <>
              <Text fontWeight={"500"} fontSize={"2xl"}>
                Background 🍀
              </Text>
              <Text maxW={"90ch"} lineHeight={"1.7"}>
                Hello there! I'm Ikramullah, you can call me ikram. I was born
                in 4th of July 2002, which is the independence day of America.
                Though, i was born in Indonesia, Banda Aceh ,the most western
                part of Indonesia. I grew up there until 20 years old and moved
                to Depok for my education.
              </Text>
            </>
            <>
              <Text fontWeight={"500"} fontSize={"2xl"}>
                Education 🏫
              </Text>

              <Text maxW={"90ch"} lineHeight={"1.7"}>
                I am currently studying in Universitas Indonesia, taking
                Computer Science degree. I actually have no programming
                experience, i chose Computer science just because. Turns out, i
                really enjoyed it and now i'm at my 2nd year.
              </Text>
            </>
            <>
              <Text fontWeight={"500"} fontSize={"2xl"}>
                My Coding Experience 💻
              </Text>

              <Text maxW={"90ch"} lineHeight={"1.7"}>
                The first time i wrote a program when i entered college. My very
                first language is python and i was so confused on what to write,
                so i kinda hate it at first. But then, one day, my friend had an
                assignment which is like a puzzle and since i liked the problem
                i tried to solve it.
              </Text>

              <Text maxW={"90ch"} lineHeight={"1.7"}>
                The problem was N-Queen problem, where you tried to put 8 queen
                on a chess board and make sure that each queen does not attack
                each other. I tried to create the program using python and i was
                so invested on it that i spent 2 days trying to solve it. I
                solved it and this is where my interest of programming started (
                thank you N-Queen ).
              </Text>

              <Text maxW={"90ch"} lineHeight={"1.7"}>
                Later on, i found out that there are a lot of things that you
                can do with programming, such as web development, AI, Software
                Engineer, and many more! Right now, i'm trying to be a fullstack
                software engineer, so there are still a lot of things i should learn 📚.
              </Text>
            </>
          </VStack>
          <SecondaryButton
            callback={() => {
              setAboutMe(false);
            }}
          >
            Go back
          </SecondaryButton>
        </FadeWrapper>
      )}
    </Flex>
  );
}
