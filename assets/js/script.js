let addButton=document.getElementById("add");//getting the add button

let deleteButton=document.getElementById("delete");//getting the delete button

addButton.addEventListener("mousedown", function(){//adding box-shadow to the add button on mousedown event

    addButton.style.boxShadow="0 0 4px 4px rgb(185, 238, 185) inset";    

});

addButton.addEventListener("mouseup", function(){//removing box-shadow from the add button on mouseup event

    addButton.setAttribute("style", "");

});

deleteButton.addEventListener("mousedown", function(){//similar to add button

    deleteButton.style.boxShadow="0 0 4px 4px rgb(235, 176, 176) inset";    

});

deleteButton.addEventListener("mouseup", function(){//similar to add button

    deleteButton.setAttribute("style", "");

});

let date=document.getElementsByClassName("date");//obtaining all the elements with class date

for(let i=0;i<date.length;i++){//iterating on the above obtained elements

    let ele=date[i];//a particular element with class as date

    if(ele.getAttribute("data-val")=="No Due Date"){
        
        ele.setAttribute("style", "font-size: 1.03rem;");//if the element has the content as "No Due Date", then we decrease the font-size from 1.2rem to 1.03rem to adjust the alignment

    }

}

let tasksToDoTodayButton=document.getElementById("tasks-to-do-today-button");//getting the tasks to do today button

tasksToDoTodayButton.addEventListener("click", function(){//handle the event when the tasks to do today button is clicked 

    let tasksToDoTodayList=document.getElementById("tasks-to-do-today-list");//getting the list of tasks to do today

    tasksToDoTodayList.style.display="block";//display the list when the tasks to do today button is clicked

    let main=document.getElementById("main");//getting the main and the list elements
    let list=document.getElementById("list");    

    main.style.opacity="0.1";//fading the main and list elements and the tasks to do today button to highlight the list which is displayed
    list.style.opacity="0.1";
    tasksToDoTodayButton.style.opacity="0.1";

});

let close=document.getElementById("close");//getting the close button to close the tasks to do today list

close.addEventListener("click", function(){//handling the event when the close button is clicked

    let tasksToDoTodayList=document.getElementById("tasks-to-do-today-list");//getting the tasks to do today list

    tasksToDoTodayList.setAttribute("style", "");//setting the display of the tasks to do today list back to none and hide the list

    let main=document.getElementById("main");//getting the main and the list elements
    let list=document.getElementById("list");

    main.setAttribute("style", "");//removing the opacity property for the elements which we're faded above and bring them back to opaque
    list.setAttribute("style", "");
    tasksToDoTodayButton.setAttribute("style", "");

});