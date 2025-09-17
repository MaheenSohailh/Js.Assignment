// ////////////////////////// Todo app

var newText = document.getElementById("newText");
var ul = document.getElementById("task");


function addTask() {
  if (newText.value === "") {
    alert("Please Enter your text!")
  } else {

    var li = document.createElement("li");
    var text = document.createTextNode(newText.value);
        li.className = "li";
    li.appendChild(text);
    
    //////// Edit 

    var editBtn = document.createElement("button");
    var editBtnText = document.createTextNode("Edit");
    editBtn.appendChild(editBtnText);
    editBtn.setAttribute("onclick", "editTask(this)");
    editBtn.className = "editBtn";
    li.appendChild(editBtn);

    ul.appendChild(li);
  }

////// Delete

    var deleteButton = document.createElement("button");
    var deleteBtnText = document.createTextNode("Delete");
    deleteButton.appendChild(deleteBtnText);
    deleteButton.setAttribute("onclick", "deleteTask(this)")
    deleteButton.className = "deleteBtn";
    li.appendChild(deleteButton);

newText.value = "";

}

function editTask(btn){
var oldValue = btn.parentNode.firstChild.nodeValue;
var newValue = prompt("Edit Text", oldValue)
btn.parentNode.firstChild.nodeValue = newValue;
}

function deleteTask(btn) {
  btn.parentNode.remove();
}

function deleteAll() {
  ul.innerHTML = "";
}