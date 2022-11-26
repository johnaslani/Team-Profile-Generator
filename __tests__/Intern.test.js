const Intern = require("../lib/Intern");
const intern = new Intern("John Due", "222", "john.due@gmail.com", "UBC");

test("TO ensure the name is correct", () => {
  expect(intern.name).toBe("John Due");
});

test("To id is correct", () => {
  expect(intern.id).toBe("222");
});

test("To email is correct", () => {
  expect(intern.email).toBe("john.due@gmail.com");
});

test("To email is correct", () => {
  expect(intern.school).toBe("UBC");
});
