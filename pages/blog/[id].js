import { blog } from "../../service/blog";
import { Box, Code, Text } from "@chakra-ui/react";
import { renderBlockComponent } from "../../helper/Blog/renderBlockComponent";

export async function getStaticPaths() {
  const pages = await blog.all();

  const pageIds = pages["results"].map((page) => {
    return {
      params: {
        id: page.id,
      },
    };
  });

  return {
    paths: pageIds,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const pageId = context.params.id;
  const pageDetail = await blog.detail(pageId);

  return {
    props: {
      details: pageDetail,
    },
  };
}

const BlogDetail = ({ details }) => {
  return (
    <>
      {details["results"].map((detail, index) => {
        return <Box key={index}>{renderBlockComponent(detail)}</Box>;
      })}
    </>
  );
};

export default BlogDetail;
