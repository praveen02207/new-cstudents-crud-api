const studentService = require("../services/studentServices")
const _ = require('lodash')
const Joi = require('joi');


const createschema = Joi.object({
    studentname: Joi.string().required(),
    age: Joi.number().integer().required(),
    phone: Joi.number().integer().required(),

});


const Updateschema = Joi.object({
    studentname: Joi.string().required(),
    age: Joi.number().integer().required(),
    phone: Joi.number().integer().required(),
    studentid: Joi.number().integer().required(),

});



module.exports.getAllStudents = async (req, res) => {
    try {
        const response = await studentService.getAllStudents()
        console.log('controller', response)
        if (!_.isEmpty(response)) {
            return res.status(200).send({
                status: true,
                message: "Successfully retrieved all Students",
                response: response
            })
        }
    } catch (error) {
        console.log(error)
    }
    return res.send({
        status: false,
        message: "Failed to get students"
    })

}



module.exports.addStudents = async (req, res) => {
    try {
        const validationResult = createschema.validate(req.body);
        if (!_.isEmpty(validationResult.error)) {
            return res.send({
                status: false,
                message: `${validationResult.error.details[0].message}`
            })
        } else {

            const response = await studentService.addStudents(req.body)
            if (!_.isEmpty(response)) {
                return res.send({
                    status: true,
                    message: 'students added successfully',
                    response: response
                })
            }

        }
    } catch (error) {
        console.log(error)
    }
    return res.send({
        status: false,
        message: 'Unable to add students'
    })

}

module.exports.updateStudent = async (req, res) => {
    try {
        const validationResult = Updateschema.validate(req.body);
        if (!_.isEmpty(validationResult.error)) {
            return res.send({
                status: false,
                message: `${validationResult.error.details[0].message}`
            })
        } else {
            const response = await studentService.updateStudent(req.body)
            console.log('response update', response)
            if ((response)) {
                return res.status(200).send({
                    status: true,
                    message: 'students updated successfully',
                    response: response
                })
            }

        }
    } catch (error) {
        console.log(error)
    }
    return res.send({
        status: false,
        message: 'Unable to update students'
    })

}

module.exports.deleteStudent = async (req, res) => {
    try {
        const response = await studentService.deleteStudent(req.body)
        console.log('response update', response)
        if ((response)) {
            return res.status(200).send({
                status: true,
                message: 'students deleted successfully',
                response: response
            })
        }
    } catch (error) {
        console.log(error)
    }
    return res.send({
        status: false,
        message: 'Unable to delete students'
    })

}

