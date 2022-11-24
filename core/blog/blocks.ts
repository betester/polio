import { EmojiObject, FileObject, PartialUser, RichText } from "./objects"

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

interface Block {
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



interface Paragraph extends Block {
    rich_text : RichText[],
    color : string,
    children : Block[]
}

interface Heading extends Block {
    rich_text : RichText[],
    color : string,
    is_toggleable : boolean
}

interface Callout extends Block {
    rich_text : RichText[],
    icon : FileObject | EmojiObject,
    color : string,
    children : Block[]
}

interface Quote extends Block {
    rich_text : RichText[],
    color : string,
    children : Block[]
}

interface BulletListItems extends Block {
    rich_text : RichText[],
    color : string,
    children : Block[]
}

interface NumberedListItems extends Block {
    rich_text : RichText[],
    color : string,
    children : Block[]
}

interface Todo extends Block {
    rich_text : RichText[],
    checked : boolean,
    color : string,
    children : Block[]
}

interface Toggle extends Block {
    rich_text : RichText[],
    color : string,
    children : Block[]
}

interface Code extends Block {
    rich_text : RichText[],
    caption : RichText[],
    language : string
}

interface Image extends Block {
    image : FileObject
}

interface Video extends Block {
    video : FileObject
}

interface File extends Block {
    file : FileObject,
    caption : RichText[]
}

interface Equation extends Block {
    expression : string
}