let task = document.querySelector("#task");
let list = document.querySelector(".list");
function listTask() {
  if (task.value === "") {
    alert("You must write somethins!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = task.value;

    list.appendChild(li);
    
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);

    task.value = "";
    saveData();
  }
}

function done(event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
    saveData();
  }
   else if (event.target.tagName === "SPAN") {
    event.target.parentElement.remove();
    saveData();
  
  }
}
list.addEventListener("click", done);
function saveData() {
  localStorage.setItem("data", list.innerHTML);
}
function showData() {
  list.innerHTML=localStorage.getItem("data");
}
showData();