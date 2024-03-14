import { createPool } from 'mysql2/promise';

const db = createPool({
    host: "gymsteering.cr1mzltliqht.eu-west-3.rds.amazonaws.com",
    port: 3306,
    user: "admin",
    password: "gymsteering",
    database: "gym",
    // connectTimeout: 15000
})

// pool.query('select * from user where id = 5', (err, result)=>{
//     if(err){
//         return console.log(err);
//     }
//     return console.log(result);
// })

export default db