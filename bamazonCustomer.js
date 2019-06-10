var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: "BlackBMW335i#8",
    database: "bamazon_db"
});

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

connection.connect(function (err) {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.log(res);
        start();
    });
});

function start() {
    inquirer
        .prompt({
            name: 'purchase',
            type: 'rawlist',
            message: 'What would you like to purchase? ',
            choices: ['Reusable Straws', 
            'Smart Television', 
            'MacBook Pro', 
            'Makeup', 
            'Pre-Workout Supplement', 
            'Nintendo Switch', 
            'Bose Over-the-ear Headphones (Noise Cancellation)', 
            'Apple Watch (Series 3)', 
            'HP All-In-One Printer', 
            'Texas Instrument Calculator']
        })
        quantity();
};

function quantity() {
    inquirer
        .prompt({
            name: 'amount',
            type: 'input',
            message: 'How many would you like to purchase? '
            // transformer: 'Please enter a valid number'
        })
}