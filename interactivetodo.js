<script type= "type/javascript">
Newtask = function() {
var myItem;

var myList;

var myPriority;

var myTaskin;

 myList = document.querySelector("#tasklist");
 myItem = document.createElement("li");
 myPriority = document.querySelector("#priority");
 myTaskin = document.querySelector("#taskin");
 myTaskin.type = "checkbox";
 myList.appendChild(myItem);
 myItem.classList.add(myPriority.value);
 myItem.appendChild(myTaskin);
 myItem.innerHTML = document.querySelector("#taskin").value;
 
