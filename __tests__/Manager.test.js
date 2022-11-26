const Manager = require("../lib/Manager");
const manager = new Manager("John", "111", "aslani.john@gmail.com", "1.121");
1.121;

test("TO ensure the name is correct", () => {
  expect(manager.name).toBe("John");
});

test("To id is correct", () => {
  expect(manager.id).toBe("111");
});

test("To email is correct", () => {
  expect(manager.email).toBe("aslani.john@gmail.com");
});

test("To office is correct", () => {
  expect(manager.office).toBe("1.121");
});
