const Employee = require("../lib/Employee");
const employee = new Employee("John", "111", "john.due@gmail.com");

test("TO ensure the name is correct", () => {
  expect(employee.name).toBe("John");
});

test("To id is correct", () => {
  expect(employee.id).toBe("111");
});

test("To email is correct", () => {
  expect(employee.email).toBe("john.due@gmail.com");
});
