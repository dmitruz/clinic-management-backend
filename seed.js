const bcrypt = require("bcryptjs");
const db = require("./config/database");

// MODELS
const Role = require("./models/roleInfo");
const User = require("./models/userInfo");
const Patient = require("./models/patientInfo");
const Doctor = require("./models/doctorInfo");
const Staff = require("./models/staffInfo");
const Appointment = require("./models/appointmentInfo");
const TestInfo = require("./models/testInfo");
const LabReport = require("./models/labreportInfo");
const Bill = require("./models/billInfo");
const Medicine = require("./models/medicineInfo");
const Events = require("./models/eventsInfo");

// UTIL
const SALT_ROUNDS = 10;

async function seed() {
    try {
        await db.sync();

        console.log("Clearing old data...");
        await Role.destroy({ where: {} });
        await User.destroy({ where: {} });
        await Patient.destroy({ where: {} });
        await Doctor.destroy({ where: {} });
        await Staff.destroy({ where: {} });
        await Appointment.destroy({ where: {} });
        await TestInfo.destroy({ where: {} });
        await LabReport.destroy({ where: {} });
        await Bill.destroy({ where: {} });
        await Medicine.destroy({ where: {} });
        await Events.destroy({ where: {} });

        console.log("Seeding roles...");
        const roles = await Role.bulkCreate([
            {
                id: 1,
                roleName: "admin",
                description: "Full system access: manage all features, users, doctors, tests, appointments, billing, and reports."
            },
            {
                id: 2,
                roleName: "doctor",
                description: "Doctor access: view patients, prescribe medicines, write lab tests, and view reports."
            },
            {
                id: 3,
                roleName: "frontoffice",
                description: "Front office access: register patients, schedule appointments, and manage visits."
            },
            {
                id: 4,
                roleName: "labtechnician",
                description: "Lab technician access: update lab test results and manage lab reports."
            }
        ]);

        console.log("Seeding users...");
        const users = await User.bulkCreate([
            {
                userName: "admin@email.com",
                password: bcrypt.hashSync("admin@123", SALT_ROUNDS),
                roleId: 1
            },
            {
                userName: "doctor@email.com",
                password: bcrypt.hashSync("doctor@123", SALT_ROUNDS),
                roleId: 2
            },
            {
                userName: "frontoffice@email.com",
                password: bcrypt.hashSync("front@123", SALT_ROUNDS),
                roleId: 3
            },
            {
                userName: "lab@email.com",
                password: bcrypt.hashSync("lab@123", SALT_ROUNDS),
                roleId: 4
            }
        ]);

        console.log("Seeding patients...");
        const patients = await Patient.bulkCreate([
            {
                patientName: "Aarav Sharma",
                dateOfBirth: "1985-03-12",
                address: "MG Road, Bangalore",
                phoneNumber: "9876543210"
            },
            {
                patientName: "Maya Verma",
                dateOfBirth: "1992-07-19",
                address: "Hinjewadi, Pune",
                phoneNumber: "9123456780"
            },
            {
                patientName: "Rahul Sen",
                dateOfBirth: "1978-11-02",
                address: "Salt Lake, Kolkata",
                phoneNumber: "9988776655"
            },
            {
                patientName: "Priya Nair",
                dateOfBirth: "1990-05-22",
                address: "Kakkanad, Kochi",
                phoneNumber: "9090909090"
            },
            {
                patientName: "Vikram Desai",
                dateOfBirth: "1988-09-15",
                address: "Viman Nagar, Pune",
                phoneNumber: "8080808080"
            },
            {
                patientName: "Sneha Iyer",
                dateOfBirth: "1995-12-25",
                address: "Indiranagar, Bangalore",
                phoneNumber: "7070707070"
            }
        ]);

        console.log("Seeding doctors...");
        const doctors = await Doctor.bulkCreate([
            {
                doctorName: "Adnan Mohamed Khalid",
                specialization: "General Physician",
                qualification: "MBBS",
                gender: "Male",
                dateOfBirth: "1980-01-01",
                address: "Bangalore",
                dateOfJoin: "2010-01-01",
                phone: 9345654431,
                email: "doctor@email.com",
                experience: "10 years"
            },
            {
                doctorName: "Anil Kapoor",
                specialization: "Cardiologist",
                qualification: "MD Cardiology",
                gender: "Male",
                dateOfBirth: "1972-06-21",
                address: "Jayanagar, Bangalore",
                dateOfJoin: "2010-01-10",
                phone: 9876512345,
                email: "anil.kapoor@clinic.com",
                experience: "15 years"
            },
            {
                doctorName: "Riya Fernandes",
                specialization: "Dermatologist",
                qualification: "MD Dermatology",
                gender: "Female",
                dateOfBirth: "1983-03-05",
                address: "Panaji, Goa",
                dateOfJoin: "2015-06-18",
                phone: 9123459876,
                email: "riya.fernandes@clinic.com",
                experience: "10 years"
            },
            {
                doctorName: "Manish Rao",
                specialization: "General Physician",
                qualification: "MBBS, MD Internal Medicine",
                gender: "Male",
                dateOfBirth: "1980-08-14",
                address: "Thane, Mumbai",
                dateOfJoin: "2012-08-01",
                phone: 9988445566,
                email: "manish.rao@clinic.com",
                experience: "12 years"
            }
        ]);

        console.log("Seeding staff...");
        await Staff.bulkCreate([
            {
                staffName: "Reena Thomas",
                staffType: "Nurse",
                qualification: "B.Sc Nursing",
                gender: "Female",
                dateOfBirth: "1990-02-11",
                address: "Whitefield, Bangalore",
                dateOfJoin: "2018-04-10",
                phone: 9911332211,
                email: "reena@clinic.com",
                experience: "6 years"
            },
            {
                staffName: "Arjun Patil",
                staffType: "Receptionist",
                qualification: "B.Com",
                gender: "Male",
                dateOfBirth: "1994-10-07",
                address: "Aundh, Pune",
                dateOfJoin: "2019-11-01",
                phone: 9922443311,
                email: "arjun@clinic.com",
                experience: "4 years"
            },
            {
                staffName: "Kavita Joshi",
                staffType: "Pharmacist",
                qualification: "D.Pharm",
                gender: "Female",
                dateOfBirth: "1989-01-17",
                address: "Kothrud, Pune",
                dateOfJoin: "2017-09-20",
                phone: 9933552244,
                email: "kavita@clinic.com",
                experience: "7 years"
            }
        ]);

        console.log("Seeding appointments...");
        await Appointment.bulkCreate([
            {
                patientName: patients[0].patientName,
                patientId: 1,
                doctorId: 1,
                appointmentDate: "2025-11-29",
                appointmentTime: "10:30 AM"
            },
            {
                patientName: patients[1].patientName,
                patientId: 2,
                doctorId: 2,
                appointmentDate: "2025-11-30",
                appointmentTime: "2:00 PM"
            },
            {
                patientName: patients[2].patientName,
                patientId: 3,
                doctorId: 3,
                appointmentDate: "2025-12-01",
                appointmentTime: "11:15 AM"
            }
        ]);

        console.log("Seeding tests...");
        await TestInfo.bulkCreate([
            {
                testName: "Blood Sugar",
                description: "Fasting and PP blood glucose test",
                patientId: 1
            },
            {
                testName: "Lipid Profile",
                description: "Complete cholesterol panel",
                patientId: 2
            },
            {
                testName: "LFT",
                description: "Liver Function Test",
                patientId: 3
            }
        ]);

        console.log("Seeding lab reports...");
        await LabReport.bulkCreate([
            {
                testName: "Blood Sugar",
                description: "Fasting glucose measurement",
                desiredRange: "70-110 mg/dL",
                resultValue: "98 mg/dL",
                reportDate: "2025-11-28",
                remarks: "Normal",
                patientId: 1,
                testId: 1
            },
            {
                testName: "Lipid Profile",
                description: "LDL, HDL, Triglycerides",
                desiredRange: "Total Cholesterol < 200 mg/dL",
                resultValue: "180 mg/dL",
                reportDate: "2025-11-28",
                remarks: "Normal",
                patientId: 2,
                testId: 2
            },
            {
                testName: "LFT",
                description: "Liver enzyme analysis",
                desiredRange: "SGPT < 35 U/L",
                resultValue: "40 U/L",
                reportDate: "2025-11-28",
                remarks: "Slightly Elevated",
                patientId: 3,
                testId: 3
            }
        ]);

        console.log("Seeding bills...");
        await Bill.bulkCreate([
            {
                patientName: "Aarav Sharma",
                billAmount: 500,
                patientId: 1
            },
            {
                patientName: "Maya Verma",
                billAmount: 900,
                patientId: 2
            },
            {
                patientName: "Rahul Sen",
                billAmount: 1200,
                patientId: 3
            }
        ]);

        console.log("Seeding medicines...");
        await Medicine.bulkCreate([
            {
                patientId: 1,
                medicineName: "Paracetamol",
                unit: "500mg",
                dose: "1 tablet",
                type: "Tablet",
                day: "5 days",
                comment: "After food",
                dateMedicine: "2025-11-28"
            },
            {
                patientId: 2,
                medicineName: "Azithromycin",
                unit: "250mg",
                dose: "1 tablet daily",
                type: "Tablet",
                day: "3 days",
                comment: "Before food",
                dateMedicine: "2025-11-28"
            },
            {
                patientId: 3,
                medicineName: "Vitamin D3",
                unit: "60k IU",
                dose: "1 capsule weekly",
                type: "Capsule",
                day: "4 weeks",
                comment: "After breakfast",
                dateMedicine: "2025-11-28"
            }
        ]);

        console.log("Seeding events...");
        await Events.bulkCreate([
            {
                eventName: "Free Health Camp",
                description: "General checkup for all patients",
                dateOfEvent: "2025-12-10"
            },
            {
                eventName: "Blood Donation Drive",
                description: "Organized in association with Red Cross",
                dateOfEvent: "2025-12-20"
            },
            {
                eventName: "Diabetes Awareness",
                description: "Awareness program on lifestyle and diet",
                dateOfEvent: "2025-12-05"
            }
        ]);

        console.log("\n✨ SEEDING COMPLETED SUCCESSFULLY ✨");
        process.exit();

    } catch (err) {
        console.error("❌ Seeding failed:", err);
        process.exit(1);
    }
}

seed();