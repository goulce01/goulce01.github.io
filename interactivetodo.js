newTask = function() {
document.querySelector("#priority").option.className;
var text = document.createTextNode(document.querySelector("#taskenter").value);
var listitem = document.createElement("li");
var check = document.createElement("input");
check.type = "checkbox";
listitem.appendChild(check);
listitem.appendChild(text);
listitem.className = document.querySelector("#priority").value;
check.onclick = completeTask;
var unordlist = document.querySelector("#ullist");
unordlist.appendChild(listitem);
localSave("ullist");
}

compTask = function(){
  if (this.checked) { 
  this.parentNode.classList.add("done");
  }
  else {
  this.parentNode.classList.remove("done");
  }
  localSave("ullist");
  
}
window.onload = function(){
  restoreList("ullist", completeTask);
}
