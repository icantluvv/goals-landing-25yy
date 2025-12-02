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
            a: ["href"],
            "*": ["class"]
        },
        allowedSchemes: ["http", "https"],
        disallowedTagsMode: "discard",
        transformTags: {
            h1: (tagName, attribs) => {
                return {
                    tagName: "h1",
                    attribs: {
                        ...attribs,
                        class: "text-[24px] lg:text-[48px] mb-5 "
                    }
                }
            },
            h2: (tagName, attribs) => {
                return {
                    tagName: "h2",
                    attribs: {
                        ...attribs,
                        class: "text-[20px] lg:text-[36px] my-5"
                    }
                }
            },
            h3: (tagName, attribs) => {
                return {
                    tagName: "h3",
                    attribs: {
                        ...attribs,
                        class: "text-[18px] lg:text-[32px] my-5"
                    }
                }
            },
            p: (tagName, attribs) => {
                return {
                    tagName: "p",
                    attribs: {
                        ...attribs,
                        class: "text-[16px] my-4"
                    }
                }
            }
        }
    })
}
