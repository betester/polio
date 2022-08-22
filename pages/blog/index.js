import { blog } from "../../service/blog";
import { Thumbnail } from "../../components/Blog";
import { Box, Divider, StackDivider, VStack } from "@chakra-ui/react";
import { propertiesToObject } from "../../helper/Blog";
import { TitleWrapper } from "../../components/Wrapper";
import { Heading, Text, Flex } from "@chakra-ui/react";
import { useState } from "react";

const Blog = ({ allPages }) => {
  const [listIndex, setListIndex] = useState(0);

  return (
    <>
      <TitleWrapper mb="2em">
        <Heading fontSize={{ base: "2xl", lg: "4xl" }}>Blog</Heading>
        <Text fontSize={{ lg: "1rem", base: "16px" }}>
          Where my personal thoughts be poured
        </Text>
      </TitleWrapper>
      <VStack
        divider={<StackDivider />}
        pb="1em"
        gap="0.7em"
        margin={"0 auto"}
        w={{ lg: "80%", base: "100%" }}
      >
        {allPages[listIndex]["pageProperties"].map((properties, index) => {
          return (
            <Thumbnail
              key={index}
              pageId={allPages[listIndex]["pages"]["results"][index].id}
              {...propertiesToObject(properties)}
            />
          );
        })}
      </VStack>
      <Divider mt="1rem" />
      <Box margin={"1rem auto"} w={{ lg: "90%", base: "100%" }}>
        {listIndex != 0 && (
          <Text
            float="left"
            onClick={() => {
              setListIndex(listIndex - 1);
            }}
          >
            Previous{" "}
          </Text>
        )}
        {listIndex != allPages.length - 1 && (
          <Text
            float={"right"}
            onClick={() => {
              setListIndex(listIndex + 1);
            }}
          >
            Next
          </Text>
        )}
      </Box>
    </>
  );
};

export async function getStaticProps() {
  const allPages = await blog.all();

  return {
    props: {
      allPages: allPages,
    },
    revalidate: 1,
  };
}

export default Blog;
