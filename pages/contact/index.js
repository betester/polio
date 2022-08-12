import {
  Heading,
  HStack,
  Icon,
  Link,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import { FadeWrapper, TitleWrapper } from "../../components/Wrapper";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineLinkedin } from "react-icons/ai";

const Contact = () => {
  return (
    <FadeWrapper>
      <VStack w="100%" gap="3em">
        <TitleWrapper textAlign="center">
          <Heading fontSize={{ base: "2xl", lg: "5xl" }}>Hit me up!</Heading>
          <Text fontSize={{ lg: "1.2rem", base: "16px" }}>
            Feel free if you wanted to have a small chit-chat, <br /> i'll be
            more than happy to reply 😄{" "}
          </Text>
        </TitleWrapper>
        <HStack gap="1em">
          <Tooltip hasArrow label="ikramzulkarnaen02@gmail.com">
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
          <Tooltip hasArrow label="betester">
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
                href="https://www.linkedin.com/in/ikram-mullah-0b17501aa/"
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
  );
};

export default Contact;
