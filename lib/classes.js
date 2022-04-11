class Employee {
    #name
    #id

    constructor(name, email, id) {
        [this.#name, this.email, this.#id] = [name ?? "John Doe", email ?? "johndoe@default.com", id ?? -1]
    }

    getName() {
        return this.#name
    }
    getEmail() {
        return this.email
    }
    getId() {
        return this.#id
    }
    getRole() {
        return this.constructor.name
    }
    generateBlock() {
        return `<div class='employee'>

        </div>`
    }
}

class Manager extends Employee {
    constructor(name, email, id, officeNumber) {
        super(name, email, id)
        this.officeNumber = officeNumber
    }
    generateHTML() {
        let html = this.generateBlock()

        return html
    }
}

class Engineer extends Employee {
    constructor(name, email, id, github) {
        super(name, email, id)
        this.github = github
    }
    getGithub() {
        return this.github
    }
}

class Intern extends Employee {
    constructor(name, email, id, school) {
        super(name, email, id)
        this.school = school
    }
    getSchool() {
        return this.school
    }
}

module.exports = { Manager, Engineer, Intern }