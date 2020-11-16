const express=require("express");//acquiring express which is the web framework we are using

const app=express();//firing up our express app

const port=8000;//giving a port number on which the server is to be run

const db=require("./config/mongoose.js");//acquiring the database

const task=require("./models/task.js");//ac

app.set("view engine", "ejs");//setting our view engine to be ejs

app.set("views", "./views");//providing the path to the views part inside the MVC(models views controllers) model

app.use(express.static("./assets"));//using middleware to provide the location for the statics i.e. the assets folder

app.use(express.urlencoded({extended: true}));//using middleware which provides a parser function and is used to decode the incoming request, so that we can obtain req.body and we are providing extended value as true to remove the warning

app.use("/", require("./routes/index.js"));//inside this middleware we're providing the location where all the requests(beginning with "/") are to be handled where the corresponding controller functions are called

app.listen(port, function(err){//making the express server listen at the port number 8000 

    if(err){//if there is an error, we print the error message on the console and we return
        console.log(`Error in running the server : ${err}`);    
        return ;
    }

    console.log(`Server is up and running on port : ${port}`);//we print the message for the successfull running of the server in case of no error

});