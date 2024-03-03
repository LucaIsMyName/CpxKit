interface JsonInterface {
  stringify: (obj: string) => string;
  parse: (str: string) => any;
  clone: (obj: string) => any;
  compare: (obj1: any, obj2: any) => boolean;
  isEmpty: (obj: any) => boolean;
  isNotEmpty: (obj: any) => boolean;
  isNull: (obj: any) => boolean;
}

export const Json: JsonInterface = {
  stringify: function (obj) {
    return JSON.stringify(obj);
  },
  parse: function (str) {
    return JSON.parse(str);
  },
  clone: function (obj) {
    return JSON.parse(JSON.stringify(obj));
  },
  compare: function (obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  },
  isEmpty: function (obj) {
    return JSON.stringify(obj) === "{}";
  },
  isNotEmpty: function (obj) {
    return JSON.stringify(obj) !== "{}";
  },
  isNull: function (obj) {
    return JSON.stringify(obj) === "null";
  },
};
