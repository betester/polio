import { FadeWrapper, TitleWrapper } from "../../components/Wrapper";
import {
  Heading,
  Grid,
  Text,
  VStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Head from "next/head";
import { SecondaryButton } from "../../components/Button";
import { Project, ProjectSelector } from "../../components/Project";
import { PROJECT_DATA } from "../../constant/Project";
import { useState } from "react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState({
    type: Object.keys(PROJECT_DATA)[0],
    index: 0,
  });

  const changeSelectedProject = (newIndex, newType) => {
    setSelectedProject({ index: newIndex, type: newType });
  };

  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <FadeWrapper>
        {" "}
        <TitleWrapper>
          <Heading fontSize={{ base: "2xl", lg: "5xl" }}>Projects</Heading>
          <Text fontSize={{ lg: "1.5rem", base: "16px" }}>
            That i have been working/contributed on
          </Text>
        </TitleWrapper>
        <Grid
          mt="2em"
          gridTemplateColumns={{ lg: "1fr 2fr", base: "1fr" }}
          gap={{ lg: "5em", base: "1em" }}
          width="100%"
          pb="3em"
        >
          <Menu matchWidth>
            <MenuButton
              display={{ base: "block", lg: "None" }}
              as={SecondaryButton}
              rightIcon={<ChevronDownIcon />}
            >
              Select Project
            </MenuButton>
            <MenuList
              backgroundColor={"primary.900"}
              borderColor="secondary.900"
            >
              {Object.keys(PROJECT_DATA).map((type) => {
                const selector = [];
                selector.push(
                  <MenuGroup title={type}>
                    {PROJECT_DATA[type].map((data, index) => (
                      <MenuItem
                        onClick={() => {
                          changeSelectedProject(index, type);
                        }}
                        key={index}
                      >
                        {data["title"]}
                      </MenuItem>
                    ))}
                  </MenuGroup>
                );
                return selector;
              })}
            </MenuList>
          </Menu>
          <VStack
            display={{ base: "None", lg: "flex" }}
            alignItems={"stretch"}
            borderRight={{ lg: "2px solid white" }}
            borderBottom={{ lg: "none", base: "2px solid white" }}
            pr={{ lg: "3em" }}
            pb={{ base: "2em" }}
            gap="1em"
          >
            {Object.keys(PROJECT_DATA).map((type) => {
              const selector = [];
              selector.push(
                <ProjectSelector
                  type={type}
                  projects={PROJECT_DATA[type]}
                  activeProject={selectedProject}
                  setActiveProject={setSelectedProject}
                />
              );
              return selector;
            })}
          </VStack>
          {
            <Project
              {...PROJECT_DATA[selectedProject["type"]][
                selectedProject["index"]
              ]}
            />
          }
        </Grid>
      </FadeWrapper>
    </>
  );
};

export default Projects;
