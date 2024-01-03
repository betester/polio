import {

  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FadeWrapper, TitleWrapper } from "../../components/Wrapper";
import { SecondaryButton } from "../../components/Button/SecondaryButton";
import { ExperienceContainer } from "../../components/Button/Experience";
import { EXPERIENCE_DATA } from "../../constant/Experience";
import { useState } from "react";
import Head from "next/head";

const Experiences = () => {
  const [year, setYear] = useState("All");

  return (
    <>
      <Head>
        <title>Experiences</title>E
      </Head>
      <FadeWrapper pb="2em">
        <VStack w="100%" gap="3em">
          <TitleWrapper textAlign="center">
            <Heading fontSize={{ base: "2xl", lg: "5xl" }}>Experiences</Heading>
            <Text fontSize={{ lg: "1.2rem", base: "16px" }}>
              That i have taken part of.
            </Text>
          </TitleWrapper>
          <Menu>
            <MenuButton minW="100px" alignSelf="end" as={SecondaryButton}>
              {year}
            </MenuButton>
            <MenuList bgColor={"inherit"} backdropFilter={"blur(20px)"}>
              <MenuItem
                _hover={{ bgColor: "secondary.900" }}
                _active={{ bgColor: "secondary.900" }}
                onClick={() => setYear("All")}
              >
                {"All"}
              </MenuItem>
              {Object.keys(EXPERIENCE_DATA).map((date, index) => {
                return (
                  <MenuItem
                    _hover={{ bgColor: "secondary.900" }}
                    _active={{ bgColor: "secondary.900" }}
                    onClick={() => setYear(date)}
                    key={index}
                  >
                    {date}
                  </MenuItem>
                );
              })}
            </MenuList>
          </Menu>
        </VStack>
        {Object.keys(EXPERIENCE_DATA)
          .sort()
          .reverse()
          .filter((experience) => {
            if (year === "All") {
              return true;
            } else {
              return experience.match(year);
            }
          })
          .map((date, index) => (
            <ExperienceContainer
              key={index}
              date={date}
              data={EXPERIENCE_DATA[date]}
            />
          ))}
      </FadeWrapper>
    </>
  );
};

export default Experiences;
