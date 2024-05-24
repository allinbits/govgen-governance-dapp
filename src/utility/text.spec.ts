import * as TextUtils from "./text";
import { expect, test } from "vitest";

test("Capitalization", () => {
  expect(TextUtils.capitalizeFirstLetter("somestring")).toBe("Somestring");
  expect(TextUtils.capitalizeFirstLetter("Somestring")).toBe("Somestring");
  expect(
    TextUtils.capitalizeFirstLetter(
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ),
  ).toBe(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  );
});

test("Shortening", () => {
  expect(TextUtils.shorten("ashortstring")).toBe("ashortstring");
  expect(TextUtils.shorten("govgen1xkue6eehv8ufhsull3quz9mwguqq4pjzdqnmjf")).toBe("govgen1x...jzdqnmjf");
});

test("Render percentages", () => {
  expect(TextUtils.decToPerc("1", 0)).toBe("100");
  expect(TextUtils.decToPerc("1", 2)).toBe("100.00");
  expect(TextUtils.decToPerc(1, 0)).toBe("100");
  expect(TextUtils.decToPerc(1, 2)).toBe("100.00");
  expect(TextUtils.decToPerc(0.3, 0)).toBe("30");
  expect(TextUtils.decToPerc(0.3, 2)).toBe("30.00");
  expect(TextUtils.decToPerc(0.32, 0)).toBe("32");
  expect(TextUtils.decToPerc(0.32, 2)).toBe("32.00");
  expect(TextUtils.decToPerc(0.454, 0)).toBe("45");
  expect(TextUtils.decToPerc(0.454, 2)).toBe("45.40");
  expect(TextUtils.decToPerc(0.4578, 0)).toBe("46");
  expect(TextUtils.decToPerc(0.4578, 2)).toBe("45.78");
  expect(TextUtils.decToPerc("0.45678", 0)).toBe("46");
  expect(TextUtils.decToPerc("0.45678", 2)).toBe("45.68");
  expect(TextUtils.decToPerc("0.12345678", 0)).toBe("12");
  expect(TextUtils.decToPerc("0.12345678", 6)).toBe("12.345678");
});

test("Link validation", () => {
  expect(TextUtils.isLink("https://google.com")).toBeTruthy();
  expect(TextUtils.isLink("https://google.com/")).toBeTruthy();
  expect(TextUtils.isLink("https://www.google.com")).toBeTruthy();
  expect(TextUtils.isLink("https://www.google.com/")).toBeTruthy();
  expect(TextUtils.isLink("https://www..google.com")).toBeFalsy();
  expect(TextUtils.isLink("https://www..google.com/")).toBeFalsy();
  expect(TextUtils.isLink("http://google.com")).toBeTruthy();
  expect(TextUtils.isLink("http://google.com/")).toBeTruthy();
  expect(TextUtils.isLink("https:/google.com")).toBeFalsy();
  expect(TextUtils.isLink("https:/google.com/")).toBeFalsy();
  expect(TextUtils.isLink("www.google.com")).toBeFalsy();
  expect(TextUtils.isLink("google.com/")).toBeFalsy();
  expect(TextUtils.isLink("HTTPS://WWW.GOOGLE.COM")).toBeTruthy();
  expect(TextUtils.isLink("HTTP://WWW.GOOGLE.COM")).toBeTruthy();
  expect(TextUtils.isLink("http://www.google.com/")).toBeTruthy();
});

test("Link Extraction", () => {
  const rawHtml = `<!DOCTYPE html>
    <html>
    <body>
    
    <h2>HTML Links</h2>
    <p>HTML links are defined with the a tag:</p>
    
    <a href="https://www.w3schools.com">This is a link</a>
    <a href="javascript: void()">This is a link</a>
    
    </body>
    </html>
    
    
    `;

  const result = TextUtils.getLinks(rawHtml);
  expect(result).toStrictEqual(["https://www.w3schools.com"]);
});
