function makeId(characters: string = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", length: number = 5): String {
  let result = "";
  let actualLength = length;
  const char = characters;
  for (let i = 0; i < actualLength; i++) {
    result += char.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
export const Id = {
  Generate: {
    int: (length: number): any => {
      const characters = "0123456789";
      return makeId(characters, length);
    },
    hex: (length: number): any => {
      const characters = "0123456789abcdef";
      return makeId(characters, length);
    },
    alphanumeric: (length: number): any => {
      const characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      return makeId(characters, length);
    },
    random: (length: number): any => {
      const characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+";
      return makeId(characters, Math.floor(Math.random() * length));
    },
  },
};
