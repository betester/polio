import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const PAGE_SIZE = 7;

export const blog = {
  query({ filter, cursor }) {
    return notion.databases.query({
      database_id: process.env.NOTION_DATABASE,
      filter: filter,
      page_size: PAGE_SIZE,
      start_cursor: cursor,
    });
  },

  async all() {
    const allPages = [];
    let hasMore = true;
    let cursor;
    let pages;
    let pageProperties;

    while (hasMore) {
      pages = await blog.query({ cursor: cursor });
      pageProperties = await Promise.all(
        pages["results"].map(
          async (page) => await blog.allProperties(page.id, page.properties)
        )
      );

      allPages.push({ pages: pages, pageProperties: pageProperties });

      cursor = pages.next_cursor;
      hasMore = pages.has_more;
    }

    return allPages;
  },

  database(database_id) {
    return notion.databases.retrieve({ database_id: database_id });
  },

  detail(block_id) {
    return notion.blocks.children.list({ block_id: block_id, page_size: 50 });
  },
  page(page_id) {
    return notion.pages.retrieve({ page_id: page_id });
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
