const student = require("../models/attedance.model");

exports.getAttendance = async function (req, res) {
    try {
        const mockStudents = [
            { id: 1, nfc: "Jorge Rayne", age: 20 },
            { id: 2, nfc: "Joedel Salas Lagong", age: 21 },
            { id: 2, nfc: "Joedel Salas Lagong", age: 21 },
            { id: 2, nfc: "Joedel Salas Lagong", age: 21 },
        ];
        res.status(200).json(mockStudents);
    } catch (err) {
        console.error("Error in getStudents:", err);
        res.status(500).json({ message: "Internal server error" });
    }
};

exports.postAttendance = async function (req, res) {
    try {
        const { nfc } = req.body;
        console.log(nfc);

        const newStudent = student.addAttendance(nfc);

        res.status(201).json({
            message: "Student added successfully!",
            student: newStudent,
        });
    } catch (err) {
        console.error("Error in Add Attendance:", err);
        res.status(500).json({ message: "Internal server error" });
    }
};
