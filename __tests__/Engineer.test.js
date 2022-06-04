const { Engineer } = require('../lib/classes.js')

test("Engineer class follows the correct structure", () => {
    expect(Engineer).toBeDefined()
    expect(Engineer.prototype).toBeDefined()
    expect(Engineer.prototype.constructor).toBe(Engineer)
    expect(Engineer.prototype.getName).toBeDefined()
    expect(Engineer.prototype.getEmail).toBeDefined()
    expect(Engineer.prototype.getId).toBeDefined()
    expect(Engineer.prototype.getRole).toBeDefined()
    expect(Engineer.prototype.getGithub).toBeDefined()
})