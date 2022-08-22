import { blog } from "../../service/blog";
import { Box, Code, Text, VStack } from "@chakra-ui/react";
import { renderBlockComponent } from "../../helper/Blog/renderBlockComponent";
import { propertiesToObject } from "../../helper/Blog";
import { BlogHeader } from "../../components/Blog";

export async function getStaticPaths() {
  const pages = await blog.all();
  const pageIds = pages.map((pagination) => {
    return pagination["pages"]["results"].map((page) => {
      return {
        params: {
          id: page.id,
        },
      };
    });
  });


  return {
    paths: pageIds.flat(),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const pageId = context.params.id;
  const pageDetail = await blog.detail(pageId);
  const page = await blog.page(pageId);
  const pagePropertiesDetail = await blog.allProperties(
    pageId,
    page.properties
  );

  return {
    props: {
      details: pageDetail,
      properties: propertiesToObject(pagePropertiesDetail),
    },
    revalidate: 1,
  };
}

const BlogDetail = ({ details, properties }) => {
  return (
    <VStack
      alignItems={"start"}
      margin="0 auto"
      w={{ lg: "70%", base: "100%" }}
    >
      <BlogHeader {...properties} />
      {details["results"].map((detail, index) => {
        return <Box key={index}>{renderBlockComponent(detail)}</Box>;
      })}
    </VStack>
  );
};

export default BlogDetail;
