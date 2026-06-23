class Employee {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    work() {
        console.log(this.name + " is working.");
    }

    showDetails() {
        console.log("ID: " + this.id);
        console.log("Name: " + this.name);
    }
}
class Developer extends Employee {
    constructor(id, name, language) {
        super(id, name);
        this.language = language;
    }

    writeCode() {
        console.log(this.name + " writes code in " + this.language);
    }

    work() {
        console.log(this.name + " is developing software.");
    }
}

class FrontendDeveloper extends Developer {
    constructor(id, name, language, framework) {
        super(id, name, language);
        this.framework = framework;
    }

    buildUI() {
        console.log(this.name + " builds UI using " + this.framework);
    }

    work() {
        console.log(this.name + " is working on frontend.");
    }
}
class Manager extends Employee {
    constructor(id, name, teamSize) {
        super(id, name);
        this.teamSize = teamSize;
    }

    conductMeeting() {
        console.log(this.name + " is conducting a meeting.");
    }

    work() {
        console.log(this.name + " is managing the team.");
    }
}
let employee = new Employee(101, "A");

let frontendDev = new FrontendDeveloper(
    102,
    "B",
    "JavaScript",
    "React"
);

let manager = new Manager(103, "C", 10);
employee.work();
employee.showDetails();

frontendDev.work();
frontendDev.writeCode();
frontendDev.buildUI();

manager.work();
manager.conductMeeting();