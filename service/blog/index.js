import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_TOKEN });

export const blog = {
  all(filter) {
    return notion.databases.query({
      database_id: process.env.NOTION_DATABASE,
      filter: filter,
      page_size: 5,
    });
  },
  detail(block_id) {
    return notion.blocks.children.list({ block_id: block_id,page_size : 50 });
  },
  allProperties(page_id, properties) {
    return Promise.all(
      Object.keys(properties).map(async (property) => {
        const newProperty = {};
        newProperty[property] = await this.getProperties(
          page_id,
          properties[property].id
        );
        return newProperty;
      })
    );
  },
  getProperties(page_id, property_id) {
    return notion.pages.properties.retrieve({
      page_id: page_id,
      property_id: property_id,
    });
  },
};
