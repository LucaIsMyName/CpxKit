export interface StringInterfaces {
  snakeToCamel: (str: string) => string;
  toHtml: (string: string) => string;
  toCamelCase: (string: string) => string;
  removeWhitespace: (string: string) => string;
  trimWhitespace: (string: any, option?: any) => string;
}
/**
 * String
 * @description
 * String utilities
 * @example
 * String.snakeToCamel("hello_world");
 * --> "helloWorld"
 * String.toHtml("Hello World");
 * --> "hello-world"
 * String.toCamelCase("hello world");
 * --> "helloWorld"
 * ...
 */
export const String: StringInterfaces = {
  snakeToCamel: function snakeToCamel(str) {
    return str.replace(/_([a-z])/g, (match, letter) => letter.toUpperCase());
  },
  toHtml: (string) => {
    // Replace spaces and special characters with hyphens
    const slug = string
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");
    return slug;
  },
  toCamelCase: (string) => {
    const words = string.split(/[\s-]+/);
    const camelCaseString = words
      .map((word, index) => {
        if (index === 0) {
          return word.toLowerCase(); // Keep the first word in lowercase
        } else {
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
      })
      .join("");
    return camelCaseString;
  },
  removeWhitespace: function removeWhitespace(string: string) {
    return string.replace(/\s+/g, "");
  },

  trimWhitespace: function trimWhitespace(string: any, option: any = "edges") {
    if (option === "all") {
      console.log("all");
      return string.replace(/\s{2,}/g, ' ').trim();
    }
    if (option === "edges") {
      return string.replace(/^\s+|\s+$/g, "");
    }
  },
};
