import DOMPurify from "dompurify";

export function purifyHtml(html: string) {
  return DOMPurify.sanitize(html, {
    FORBID_TAGS: [
      "style",
      "form",
      "math",
      "iframe",
      "input",
      "audio",
      "video",
      "canvas",
      "dialog",
      "source",
      "textarea",
      "embed",
    ],
  });
}

export function purifyForLinks(html: string) {
  return DOMPurify().sanitize(html, { ALLOWED_TAGS: ["a"] });
}
