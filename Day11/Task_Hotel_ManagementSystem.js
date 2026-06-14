const records = [];
let idCounter = 101;

function createRecord(name, problem) {
    records.push({
        patientCode: idCounter++,
        patientName: name,
        healthIssue: problem
    });
}

createRecord("Nikhil", "Fever");
createRecord("Rahul", "Cold");
createRecord("Aman", "Cough");

function displayRecords() {
    console.log("PATIENT DATABASE");

    for (let index = 0; index < records.length; index++) {
        const entry = records[index];

        console.log(
            `${entry.patientCode} - ${entry.patientName} (${entry.healthIssue})`
        );
    }
}

function getPatientByName(name) {
    for (let index = 0; index < records.length; index++) {
        if (records[index].patientName.toLowerCase() === name.toLowerCase()) {
            return records[index];
        }
    }
    return "Record Not Found";
}

function getPatientsByDisease(disease) {
    const result = [];

    for (let index = 0; index < records.length; index++) {
        if (records[index].healthIssue === disease) {
            result.push(records[index]);
        }
    }

    return result;
}

displayRecords();

console.log("\nSearch Result:");
console.log(getPatientByName("Rahul"));

console.log("\nFever Cases:");
console.log(getPatientsByDisease("Fever"));