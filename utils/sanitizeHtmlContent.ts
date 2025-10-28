import sanitizeHtml from "sanitize-html"

export const sanitizeHtmlContent = (html: string): string => {
    return sanitizeHtml(html, {
        allowedTags: [
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "p",
            "br",
            "hr",
            "strong",
            "b",
            "em",
            "i",
            "u",
            "a",
            "ul",
            "ol",
            "li",
            "blockquote",
            "pre",
            "code"
        ],
        allowedAttributes: {
            a: ["href"]
        },
        allowedSchemes: ["http", "https"],
        disallowedTagsMode: "discard"
    })
}
