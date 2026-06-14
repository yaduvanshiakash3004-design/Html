
function createPatientId() {
    let id = 0;

    return function () {
        id++;
        return id;
    };
}

const generateId = createPatientId();

let patients = [];

function addPatient(name, disease) {
    let patient = {
        id: generateId(),
        name: name,
        disease: disease
    };

    patients.push(patient);
}


function operation(callback) {
    callback();
}


operation(() => addPatient("Nikhil", "Fever"));
operation(() => addPatient("Rahul", "Cold"));
operation(() => addPatient("Aman", "Cough"));



console.log("Patient List:");

patients.map(patient => {
    console.log(
        "ID:", patient.id,
        "| Name:", patient.name,
        "| Disease:", patient.disease
    );
});


let result = patients.find(
    patient => patient.name === "Rahul"
);

console.log("\nSearched Patient:");
console.log(result);


let feverPatients = patients.filter(
    patient => patient.disease === "Fever"
);

console.log("\nFever Patients:");
console.log(feverPatients);