const mongoose=require("mongoose");//acquiring mongoose and its existing instance will be used

const Task=require("../models/task.js");//acquiring the Task model for which the taskSchema has been defined

module.exports.home=function(req, res){//here we are defining the home controller function and are exporting it too, so that it can be required inside index.js inside routes folder, where differenent controller functions are called corresponding to the incoming route

    Task.find({}, function(err, tasks){//since we have passed no arguments inside {} for which the seraching is to be done in the database, so this function will return us with all the tasks if there is no error

        if(err){//displaying an error message if there is an error while fetching the tasks from the database
            console.log(`Error in fetching tasks from database : ${err}`);
            return ;
        }

        return res.render("home", {//rendering the home page as the response and providing the dynamic content too, if there is no error in fetching the tasks from the database

            title: "TODO LIST",
            task_list: tasks

        });
    
    });

}

module.exports.addTask=function(req, res){//here we are defining the addTask controller funtion and are exporting it too

    let dateVal=null;//this is the default value of the due date of the task

    if(req.body.dueDate.length==0){//in case the dueDate has not been specified by the user i.e. req.body.dueDate is an empty string, then we initialize dateVal to "No Due Date"

        dateVal="No Due Date";

    } 
    else{//in this case the user has specified the dueDate and we set dateVal to that value only

        dateVal=req.body.dueDate;

    }

    Task.create({//here we are creating a new task document and are providing the respective values for all the fields

        description: req.body.description, 
        category: req.body.category,    
        dueDate: dateVal       

    }, function(err, newTask){

        if(err){//displaying an error message if there is any error while creating the above Task document
            console.log(`Error in adding task : ${err}`);
            return ;
        }    
                
        return res.redirect("back");//reload the page with the new task added as the response in case of successful creation of the above Task document

    });

}

module.exports.deleteTask=function(req, res){//here we are defining the deleteTask controller function and are exporting it too

    let checkboxArray=req.body.tasksToDelete;//obtaining the value of taksToDelete from req.body which can be undefined or string or an object too

    if(typeof(checkboxArray)==="undefined"){//this is the case when no tasks are selected for deletion and we just reload the page

        return res.redirect("back");

    }

    else if(typeof(checkboxArray)==="string"){//this is the case when a single task has been selected for deletion
        
        Task.findByIdAndDelete(checkboxArray, function(err){//here we are finding the task by its id and are trying to delete it

            if(err){//displaying an error message if there is any while deleting the task
                console.log(`Error in deleting task : ${err}`);
                return ;
            }

            return res.redirect("back");//if the task has been successfully deleted then we just reload the page as the response which no longer contains the task that was to be deleted

        });  

    }
    else{

        for(let i=0;i<checkboxArray.length;i++){//this is the case when there are multiple tasks to be deleted and checkboxArray is an object and we are iterating over all the tasks which are to be deleted
            
            let id=checkboxArray[i];//a particular task to be deleted

            Task.findByIdAndDelete(id, function(err){//finding the task by its id and are trying to delete it

                if(err){//displaying an error message if there is any while deleting the task
                    console.log(`Error in deleting task(s) : ${err}`);
                    return ;
                }

            });

        }

        return res.redirect("back");//if the tasks have been successfully deleted then we just reload the page as the response which no longer contains the tasks that were to be deleted

    }
    

};