const { Employee } = require('../lib/classes.js')

test("Employee class follows the correct structure", () => {
    expect(Employee).toBeDefined()
    expect(Employee.prototype).toBeDefined()
    expect(Employee.prototype.constructor).toBe(Employee)
    expect(Employee.prototype.getName).toBeDefined()
    expect(Employee.prototype.getEmail).toBeDefined()
    expect(Employee.prototype.getId).toBeDefined()
    expect(Employee.prototype.getRole).toBeDefined()
})