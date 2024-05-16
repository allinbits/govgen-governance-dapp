import * as DomPurify from "dompurify";

export function purifyHtml(html: string) {
  return DomPurify.sanitize(html, {
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
