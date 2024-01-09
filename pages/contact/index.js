import {
  Heading,
  HStack,
  Icon,
  Link,
  Text,
  Tooltip,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { FadeWrapper, TitleWrapper } from "../../components/Wrapper";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineLinkedin } from "react-icons/ai";
import Head from "next/head";

const Contact = () => {
  return (
    <Flex alignItems={"center"} h={"100%"} pb="1em" w="100%">
      <Head>
        <title>Contact</title>
      </Head>
      <FadeWrapper>
        <VStack w="100%" gap="3em">
          <TitleWrapper textAlign="center">
            <Heading fontSize={{ base: "2xl", lg: "4xl" }}>My Contacts</Heading>
            <Text fontSize={{ lg: "1.2rem", base: "16px" }}>
              I mainly reachable from email, but feel free to contact me from LinkedIn or <br /> if you 
              wanted to connect with my GitHub, i am happily to accept 😄
            </Text>
          </TitleWrapper>
          <HStack gap="1em">
            <Tooltip hasArrow label="My main email, feel free to contact">
              <span>
                <Icon
                  as={HiOutlineMail}
                  onClick={() => {
                    window.location = "mailto:ikramzulkarnaen02@gmail.com";
                  }}
                  width={{ lg: "5rem", base: "3em" }}
                  height={{ lg: "5rem", base: "3em" }}
                />
              </span>
            </Tooltip>
            <Tooltip hasArrow label="Follow me on GitHub">
              <span>
                <Link href="https://github.com/betester" isExternal>
                  <Icon
                    as={FaGithub}
                    width={{ lg: "5rem", base: "3em" }}
                    height={{ lg: "5rem", base: "3em" }}
                  />
                </Link>
              </span>
            </Tooltip>
            <Tooltip hasArrow label="ikram mullah">
              <span>
                <Link
                  href="https://www.linkedin.com/in/ikramullah-0b17501aa/"
                  isExternal
                >
                  <Icon
                    as={AiOutlineLinkedin}
                    width={{ lg: "5rem", base: "3em" }}
                    height={{ lg: "5rem", base: "3em" }}
                  />
                </Link>
              </span>
            </Tooltip>
          </HStack>
        </VStack>
      </FadeWrapper>
    </Flex>
  );
};

export default Contact;
