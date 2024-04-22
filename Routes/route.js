const express = require("express");
const router = express.Router();

// controllers
const studentsControllers = require("../controllers/studentControllers")

// routes
router.get('/getAllStudents', studentsControllers.getAllStudents)
router.post('/AddStudent', studentsControllers.addStudents)
router.post('/updateStudent', studentsControllers.updateStudent)
router.post('/deleteStudent', studentsControllers.deleteStudent)

module.exports = router;