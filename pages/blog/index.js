import { blog } from "../../service/blog";
import { Thumbnail } from "../../components/Blog";
import { StackDivider, VStack } from "@chakra-ui/react";
import { propertiesToObject } from "../../helper/Blog";
import { TitleWrapper } from "../../components/Wrapper";
import { Heading, Text } from "@chakra-ui/react";

const Blog = ({ pages, pageProperties }) => {
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
        {" "}
        {pageProperties.map((properties, index) => {
          return (
            <Thumbnail
              key={index}
              pageId={pages["results"][index].id}
              {...propertiesToObject(properties)}
            />
          );
        })}
      </VStack>
    </>
  );
};

export async function getStaticProps() {
  const pages = await blog.all();
  const pageProperties = await Promise.all(
    pages["results"].map(
      async (page) => await blog.allProperties(page.id, page.properties)
    )
  );

  return {
    props: {
      pages: pages,
      pageProperties: pageProperties,
    },
    revalidate: 10,
  };
}

export default Blog;
