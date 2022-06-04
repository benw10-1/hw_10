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
    getAllBase() {
        return {
            name: this.#name,
            email: this.email,
            id: this.#id,
            role: this.getRole()
        }
    }
}

class Manager extends Employee {
    constructor(name, email, id, officeNumber) {
        super(name, email, id)
        this.officeNumber = officeNumber
    }
    getOfficeNumber() {
        return this.officeNumber
    }
    getAll() {
        return {
            ...super.getAllBase(),
            officeNumber: this.officeNumber
        }
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
    getAll() {
        return {
            ...super.getAllBase(),
            github: this.github
        }
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
    getAll() {
        return {
            ...super.getAllBase(),
            school: this.school
        }
    }
}

module.exports = { Manager, Engineer, Intern, Employee }