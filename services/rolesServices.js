const knex = require('knex')(require('../Utlis/database'));

module.exports.getAllRoles = async () => {
    try {
        const role = await knex('roles').select('*')
        return role
    } catch (error) {
        console.log(error)
    }
}

module.exports.addRoles = async (props) => {
    try {
        const role = await knex('roles').insert(props)
        return role;
    } catch (error) {
        console.log(error)
    }
}