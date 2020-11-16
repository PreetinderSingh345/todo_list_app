const express=require("express");//acquiring express and the existing instance of express will be used here

const router=express.Router();//here we are calling the Router function of express and are obtaining it inside router const variable

const homeController=require("../controllers/home_controller.js");//acquiring the home_controller.js file inside controllers folder so that we can use different controller functions which are made there and made available as they are exported

router.get("/", homeController.home);//in case of request for "/" or "/home" route we call the home controller function and the requests are simple get requests
router.get("/home", homeController.home);
router.post("/add-task", homeController.addTask);//in the case of "/add-task" and "/delete-task" post(as we need req.body object) requests we call the addTask and the deleteTask controller functions respectively
router.post("/delete-task", homeController.deleteTask);

module.exports=router;//here we are exporting the router, so that it can be specified inside the middleware in the main index.js file