import { blog } from "../../service/blog";
import { Thumbnail } from "../../components/Blog";
import { Box, VStack } from "@chakra-ui/react";
import { propertiesToObject } from "../../helper/Blog";

const Blog = ({ pageProperties }) => {
  return (
    <VStack pb="1em" gap="0.7em" margin={"0 auto"} w="100%">
      {pageProperties.map((properties, index) => {
        return <Thumbnail key={index} {...propertiesToObject(properties)} />;
      })}
    </VStack>
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
