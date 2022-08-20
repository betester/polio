import { VStack, Text } from "@chakra-ui/react";
import { SecondaryButton } from "../Button";

export const ProjectSelector = ({
  type,
  projects,
  setActiveProject,
  activeProject,
}) => {
  const changeActiveProject = (newIndex, newType) => {
    setActiveProject({ index: newIndex, type: newType });
  };

  return (
    <VStack alignItems={"stretch"}>
      <Text fontWeight={"bold"} fontSize="xl">
        {type}
      </Text>
      {projects.map((project, index) => (
        <SecondaryButton
          callback={() => {
            changeActiveProject(index, type);
          }}
          key={index}
          active={
            (activeProject["index"] === index) &
            (type === activeProject["type"])
          }
          justifyContent="start"
        >
          {index + 1}. {project["title"]}{" "}
        </SecondaryButton>
      ))}
    </VStack>
  );
};
