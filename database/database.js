const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "todolist"
});

connection.connect((error) =>{
    if(error)
    {
        console.log("Error: " +error);
    }
    else
    {
        // console.log("Connection Set up Finally");
    }
});

connection.query("Select * from users",(error,result)=>{
    if(error)
    {
        console.error("Error: " ,error);
    }
    else
    {
        // console.log(result);
    }
})

connection.query("Select * from todo_lists", (error,result)=>{
    if(error)
    {
        console.log("Error: "+error)
    }
    else
    {
        // console.log(result)
    }
})

module.exports = connection;