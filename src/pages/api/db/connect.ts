//next created types for req,res objects
import mysql from "mysql2/promise";

export async function connection(){
    const con = await mysql.createPool({
        host: process.env.MYSQL_HOST_NAME,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.DATABASE,
        connectionLimit: 30
      }
    );
    return con;
}

