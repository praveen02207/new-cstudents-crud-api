
const rolesService = require('../services/rolesServices')
const _ = require('lodash')


module.exports.getroles = async (req, res) => {
    try {
        const response = await rolesService.getAllRoles()
        console.log('vvvv', response)
        return res.status(200).send({
            status: true,
            message: 'Roles fetched successfully',
            data: response
        })
    } catch (error) {
        console.log(error)
    }
    return res.send({
        status: 'false',
        message: 'unable to get roles'
    })

}



module.exports.addRoles = async (req, res) => {
    try {
        console.log(req.body)
        const response = await rolesService.addRoles(req.body)
        console.log('vvvv', response)
        if (!_.isEmpty(response)) {
            return res.status(200).send({
                status: true,
                message: 'Roles Added successfully',
                data: response
            })
        }
    } catch (error) {
        console.log(error)
    }
    return res.send({
        status: 'false',
        message: 'unable to Add roles'
    })

}