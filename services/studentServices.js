// const db = require("../Utlis/database");

// module.exports.getAllStudents = () => {
//     try {
//         return new Promise((resolve, reject) => {
//             const q1 = "select * from students";
//             db.query(q1, (err, result) => {
//                 if (err) {
//                     console.error('Error executing query:', err);
//                     reject(err);
//                 } else {
//                     resolve(result);
//                 }
//             });
//         });
//     } catch (error) {
//         console.log(error);
//         throw error;
//     }
// };


const knex = require('knex')(require('../Utlis/database'));
// knex.raw('SELECT 1')
//     .then(() => console.log('Database connection successful'))
//     .catch((error) => console.log('Error occured connecting to database:', error));


module.exports.getAllStudents = async () => {
    try {
        const students = await knex('students')
            .select('*')
            .orderBy('studentname', 'asc')
        return students;
    } catch (error) {
        console.error('Error fetching students:', error);
        throw error;
    }
};

module.exports.addStudents = async (props) => {
    try {
        const response = await knex('students').insert(props);
        return response;
    } catch (error) {
        console.error('Error fetching students:', error);
        throw error;
    }
};

module.exports.updateStudent = async (props) => {
    const { studentid, ...studentinfo } = props
    console.log('props', studentid)
    try {
        const response = await knex('students')
            .where('studentid', studentid)
            .update(studentinfo)
        return response;
    } catch (error) {
        console.log('Error fetching students:', error);

    }
};

module.exports.deleteStudent = async (props) => {
    const { studentid } = props
    console.log('props', studentid)
    try {
        const response = await knex('students')
            .where('studentid', studentid)
            .del()
        return response;
    } catch (error) {
        console.log('Error fetching students:', error);

    }
};



