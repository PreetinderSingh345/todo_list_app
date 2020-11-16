const mongoose=require("mongoose");//acquiring mongoose and its same instance will be used which is available

const taskSchema=new mongoose.Schema({//defining the schema for a task to be added be ths user

    description: {//this description field will be of string type and is necessary

        type: String, 
        required: true

    },

    category: {//this category field will be of string type and is necessary

        type: String,
        required: true

    },

    dueDate: {//this dueDate field will be of string type and may or may not be provided by the user

        type: String                       

    },

});

const Task=mongoose.model("Task", taskSchema);//to the model which is used this taskSchema we provide the name as Task and we obtain it inside Task const variable

module.exports=Task;//we are exporting this Task, so that it can be required wherever needed