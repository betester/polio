enum RichTextType {
    TEXT = "text",
    
}


interface RichText {

}

interface PartialUser {

}

interface FileObject {
    type : string
}

interface ExternalFileObject extends FileObject {
    url : string
}

interface NotionFileObject extends FileObject {
    url : string,
    expiry_time : string
}

interface EmojiObject {

}

export {RichText,PartialUser,FileObject,EmojiObject}