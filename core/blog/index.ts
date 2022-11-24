enum BlockTypes {
    PARAGRAPH = "paragraph",
    HEADING1 = "heading_1",
    HEADING2 = "heading_2",
    HEADING3 = "heading_3",
    BULLETED_LIST_ITEMS = "bulleted_list_items",
    TO_DO = "to_do",
    TOGGLE = "toggle",
    CHILD_PAGE = "child_page",
    EMBED = "embed",
    IMAGE = "image",
    VIDEO = "video",
    FILE = "file",
    PDF = "pdf",
    BOOKMARK = "bookmark",
    CALLOUT = "callout",
    QUOTE = "quote",
    EQUATION = "equation",
    DIVIDER = "divider",
    TABLE_OF_CONTENTS = "table_of_contents",
    COLUMN = "column",
    COLUMN_LIST = "column_list",
    LINK_PREVIEW = "link_preview",
    SYNCED_BLOCK = "synced_block",
    TEMPLATE = "template"
}

interface PartialUser {

}

interface Blocks {
    object : string,
    id : string,
    parent : object,
    type : BlockTypes,
    created_time : string,
    created_by : PartialUser,
    last_edited_time : string,
    last_edited_by : string,
    archived : boolean,
    has_children : boolean
}