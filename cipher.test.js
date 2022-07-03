const { encrypt, decrypt } = require("./index");

test("encrypt test", () => {
  expect(encrypt("abc")).toEqual("abc");
});

test("encrypt test", () => {
  expect(encrypt("словарь")).toEqual("лсошамь");
});

test("encrypt test", () => {
  expect(encrypt("великий государь")).toEqual("шеситий чолуцамь");
});



test("decrypt test", () => {
  expect(decrypt("abc")).toEqual("abc");
});

test("decrypt test", () => {
  expect(decrypt("лсошамь")).toEqual("словарь");
});

test("decrypt test", () => {
  expect(decrypt("шеситий чолуцамь")).toEqual("великий государь");
});