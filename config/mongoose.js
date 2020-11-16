const mongoose=require("mongoose");//requiring the mongoose library

mongoose.connect("mongodb://localhost/todo_db", {useNewUrlParser: true, useUnifiedTopology: true});//connect to the database and we are using new parser and unified topology to remove the warnings which we were getting

const db=mongoose.connection;//acquiring the connection to check if it is successful or not

db.on("error", function(err){//print the error message if there is any error while we try to turn on the connection to the database

    console.log(`Error in connecting to the database : ${err}`);

});

db.once("open", function(){//print the successful connection message once the connection to the database is successfully opened

    console.log("Connected to the database");

})