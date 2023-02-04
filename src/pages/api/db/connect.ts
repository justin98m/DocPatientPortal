//next created types for req,res objects
import mysql from "mysql2/promise";

export async function connection(){
    const con = await mysql.createConnection({
        host: process.env.MYSQL_HOST_NAME,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.DATABASE,
      }
    );
    return con;
}
