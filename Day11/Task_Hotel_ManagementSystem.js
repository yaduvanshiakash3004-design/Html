const records = [];
let patientIdCounter = 101;

function createRecord(
   name,
    age,
    problem,
    hospital,
    doctorName,
    doctorSpecialization,
    doctorStatus,
    bookedSlot,
    freeSlot) {
    records.push({
        patientCode: patientIdCounter++,
        patientName: name,
        age: age,
        healthIssue: problem,
        hospitalName: hospital,
        doctorName: doctorName,
        doctorSpecialization: doctorSpecialization,
        doctorStatus: doctorStatus,
        bookedSlot: bookedSlot,
        freeSlot: freeSlot
    });
}

createRecord(
    "Nikhil",
    24,
    "Cough",
    "AIIMS",
    "Dr. Sharma",
    "General Physician",
    "Free",
    "10:00 AM",
    "2:00 PM - 5:00 PM"
);

createRecord(
    "Aman",
    25,
    "Heart Pain",
    "BHU Hospital",
    "Dr. Verma",
    "Cardiologist",
    "Busy",
    "11:00 AM",
    "6:00 PM - 8:00 PM"
);

createRecord(
    "Akash",
    24,
    "Asthma",
    "Apollo Hospital",
    "Dr. Singh",
    "Pulmonologist",
    "Free",
    "09:00 AM",
    "1:00 PM - 4:00 PM"
);

createRecord(
    "Devansh",
    23,
    "Skin Allergy",
    "Jupiter Hospital",
    "Dr. Mishra",
    "Dermatologist",
    "Busy",
    "12:00 PM",
    "5:00 PM - 7:00 PM"
);

createRecord(
    "Ashish",
    26,
    "Fracture",
    "City Hospital",
    "Dr. Gupta",
    "Orthopedic",
    "Free",
    "01:00 PM",
    "3:00 PM - 6:00 PM"
);

createRecord(
    "Rahul",
    28,
    "Migraine",
    "Medanta",
    "Dr. Yadav",
    "Neurologist",
    "Busy",
    "02:00 PM",
    "7:00 PM - 9:00 PM"
);

createRecord(
    "Rohit",
    8,
    "Fever",
    "Children Care Hospital",
    "Dr. Khan",
    "Pediatrician",
    "Free",
    "10:30 AM",
    "4:00 PM - 6:00 PM"
);

createRecord(
    "Saurabh",
    35,
    "Kidney Stone",
    "Apollo Hospital",
    "Dr. Patel",
    "Nephrologist",
    "Busy",
    "03:00 PM",
    "8:00 PM - 10:00 PM"
);

createRecord(
    "Vivek",
    29,
    "Eye Infection",
    "Eye Care Centre",
    "Dr. Tiwari",
    "Ophthalmologist",
    "Free",
    "11:30 AM",
    "2:00 PM - 5:00 PM"
);

createRecord(
    "Karan",
    31,
    "Ear Pain",
    "MS Clinic",
    "Dr. Srivastava",
    "ENT Specialist",
    "Busy",
    "04:00 PM",
    "6:00 PM - 9:00 PM"
);

// Display All Records
function displayRecords() {
    console.log("\n");

    for (let i = 0; i < records.length; i++) {
        const entry = records[i];

        console.log(
`Patient ID: ${entry.patientCode}
Patient Name: ${entry.patientName}
Age: ${entry.age}
Disease: ${entry.healthIssue}
Hospital: ${entry.hospitalName}
Doctor: ${entry.doctorName}
Specialization: ${entry.doctorSpecialization}
Doctor Status: ${entry.doctorStatus}
Booked Slot: ${entry.bookedSlot}
Available Slot: ${entry.freeSlot}`
        );
    }
}

function getPatientByName(name) {
    for (let i = 0; i < records.length; i++) {
        if (
            records[i].patientName.toLowerCase() ===
            name.toLowerCase()
        ) {
            return records[i];
        }
    }

    return "Patient Record Not Found";
}

function getPatientsByDisease(disease) {
    const result = [];

    for (let i = 0; i < records.length; i++) {
        if (
            records[i].healthIssue.toLowerCase() ===
            disease.toLowerCase()
        ) {
            result.push(records[i]);
        }
    }

    return result;
}function getDoctorsByStatus(status) {
    const result = [];

    for (let i = 0; i < records.length; i++) {
        if (
            records[i].doctorStatus.toLowerCase() ===
            status.toLowerCase()
        ) {
            result.push(records[i]);
        }
    }

    return result;
}

console.log("\n");
console.log(getPatientByName("Akash"));

console.log("\n");
console.log(getPatientsByDisease("Fever"));

console.log("\n");
console.log(getDoctorsByStatus("Free"));

console.log("\n");
console.log(getDoctorsByStatus("Busy"));