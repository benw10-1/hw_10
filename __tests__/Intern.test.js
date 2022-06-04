const { Intern } = require("../lib/classes")

test("Intern class follows the correct structure", () => {
    expect(Intern).toBeDefined()
    expect(Intern.prototype).toBeDefined()
    expect(Intern.prototype.constructor).toBe(Intern)
    expect(Intern.prototype.getName).toBeDefined()
    expect(Intern.prototype.getEmail).toBeDefined()
    expect(Intern.prototype.getId).toBeDefined()
    expect(Intern.prototype.getRole).toBeDefined()
    expect(Intern.prototype.getSchool).toBeDefined()
})