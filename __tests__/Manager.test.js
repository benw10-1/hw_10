const { Manager } = require("../lib/classes")

test("Manger class follows the correct structure", () => {
    expect(Manager).toBeDefined()
    expect(Manager.prototype).toBeDefined()
    expect(Manager.prototype.constructor).toBe(Manager)
    expect(Manager.prototype.getName).toBeDefined()
    expect(Manager.prototype.getEmail).toBeDefined()
    expect(Manager.prototype.getId).toBeDefined()
    expect(Manager.prototype.getRole).toBeDefined()
    expect(Manager.prototype.getOfficeNumber).toBeDefined()
})