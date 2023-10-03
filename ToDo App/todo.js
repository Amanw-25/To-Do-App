let ul = document.getElementById("list-container")
let input = document.getElementById("input-box");

function addtask() {
    if (input.value === '') {
        alert("Enter the Task");
    }
    else{
        let item = document.createElement("li");
        item.innerText = input.value;      
        ul.appendChild(item);
        


        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        item.appendChild(span);

       
        input.value = ""; 
        saveData();
    }
}

ul.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",ul.innerHTML);
}
function showTask(){
    ul.innerHTML=localStorage.getItem("data");
}

showTask();