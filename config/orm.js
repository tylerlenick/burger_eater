// Import MySQL connection.
var connection = require("../config/connection.js");

//Initializing the orm object to be used later on.
var orm = {
    all: function(cb) {
        var queryString = "SELECT * FROM burger;";
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
            cb(result);
        });
    },
    create: function(name, bool, cb) {

    
        connection.query("INSERT into burgers(burger_name, devourded VALUES(?, ?)",[name, bool],  function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      },
    update: function(table, objColVals, condition, cb) {
     
        connection.query("UPDATE burger SET , function(err, result) {
            if (err) {
            throw err;
            }

            cb(result);
        });
    },
}