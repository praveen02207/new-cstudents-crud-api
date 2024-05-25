const express = require("express");
const router = express.Router();

// controllers
const studentsControllers = require("./controllers/studentControllers")
const rolesController = require('./controllers/rolesControllers')



// students
router.get('/getAllStudents', studentsControllers.getAllStudents)
router.post('/AddStudent', studentsControllers.addStudents)
router.post('/updateStudent', studentsControllers.updateStudent)
router.post('/deleteStudent', studentsControllers.deleteStudent)

 
// roles    
router.get('/getRoles',rolesController.getroles)
router.post('/addRoles',rolesController.addRoles)

// skills


module.exports = router;