import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import { FadeWrapper, TitleWrapper } from "../components/Wrapper";
import { SecondaryButton } from "../components/Button/SecondaryButton";

export default function Home() {
  const [aboutMe, setAboutMe] = useState(false);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      {!aboutMe && (
        <FadeWrapper>
          <TitleWrapper>
            <Heading fontSize={"5xl"}>
              Hello there, my name is Ikram <br /> I'm a student{" "}
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
            <Heading fontSize={"5xl"}>About me</Heading>
          </TitleWrapper>
          <Text maxW={"90ch"} mt="2em" lineHeight={"1.7"}>
            Hello there! I'm Ikramullah, you can call me ikram. I'm a computer
            science student at Universitas Indonesia. I started my first program
            when i entered college, so i'm quite late knowing it. Regardless, i
            enjoy it a lot since then, especially about algorithms, backend, and
            a bit of frontend. In general, i wanted to be a fullstack software
            engineer, so there are still a lot for me to learn :) .
          </Text>
          <SecondaryButton
            callback={() => {
              setAboutMe(false);
            }}
          >
            Go back
          </SecondaryButton>
        </FadeWrapper>
      )}
    </>
  );
}
