const Engineer = require("../lib/Engineer");
const engineer = new Engineer(
  "Mark Carlson",
  "333",
  "markc@gmail.com",
  "https://github.com/markcarlson"
);

test("TO ensure the name is correct", () => {
  expect(engineer.name).toBe("Mark Carlson");
});

test("To id is correct", () => {
  expect(engineer.id).toBe("333");
});

test("To email is correct", () => {
  expect(engineer.email).toBe("markc@gmail.com");
});

test("To email is correct", () => {
  expect(engineer.github).toBe("https://github.com/markcarlson");
});
