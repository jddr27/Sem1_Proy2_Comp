var app = require('express')(); // Express App include
var mysql = require('mysql'); // Mysql include
var bodyParser = require("body-parser"); // Body parser for fetch posted data

var connection = mysql.createConnection({ // Mysql Connection
    host            : process.env.DATABASE_HOST,
    port            : process.env.MYSQL_PORT,
    user            : process.env.MYSQL_USER,
    password        : process.env.MYSQL_PASSWORD,
    database        : process.env.MYSQL_DATABASE
});

connection.connect(function(err){
    if(err){
        console.error("error connecting: " + err.stack);
        return process.exit(22); //consistently exit so the Docker container will restart until it connects to the sql db
    }
    console.log("connected as id " + connection.threadId);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // Body parser use JSON data

app.get('/', (req, res) => {
    res.send('Hello world\n');
  });

// fetch all users from users table in DB.
app.get('/todos',function(req,res){
    var data = {
        "error":true,
        "Users":""
    };

    connection.query("SELECT * from employees",function(err, rows, fields){
        if(rows.length != 0){
            res.json(rows);
        }else{
            data["error"] = true;
            data["Users"] = 'No users Found..';
            res.json(data);
        }
    });
});

// agregar un nuevo empleado
app.post('/nuevo',function(req,res){
    var a1 = req.body.nombre;
    var a2 = req.body.apellido;
    var a3 = req.body.depto;
    var a4 = req.body.email;
    var data = {
        "error":true,
        "Message":""
    };

    if(!!a1 && !!a2 && !!a3 && !!a4){
        connection.query("INSERT INTO employees (first_name, last_name, department, email) VALUES (?, ?, ?, ?)",[a1,a2,a3,a4],function(err, rows, fields){
            if(!!err){
                data["Message"] = "Error: No se pudo ingresar";
            }else{
                data["error"] = false;
                data["Message"] = "Exito";
            }
            res.json(data);
        });
    }else{
        data["error"] = true;
        data["Message"] = "Error: Faltan campos: " + a1 + ", " + a2 + ", " + a3 + "," + a4;
        res.json(data);
    }
});

app.listen(3000, function(){
    console.log('Connected & Listen to port 3000');
});
