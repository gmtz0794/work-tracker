const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
<<<<<<< HEAD
  // Your username
  user: "root",
  // Your password
  password: "Guztav013",
=======
  user: "root",
  password: "Guztav013!",
>>>>>>> 6c5274647ad25ed78a09b923e9430dc95e20d9f6
  database: "employees"
});

connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;
