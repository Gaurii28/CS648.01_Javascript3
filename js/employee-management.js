var employee_list = [["Kashish", "President", "10"], ["Chintan", "Director", "02"], ["Yash", "Manager", "05"], ["Harsh", "Vice President", "11"], ["Shivam", "Associate", "12"], ["Pritesh", "Associate", "13"]]

var $ = function (id) {
  "use strict";
  return document.getElementById(id);
}
function table() {
  var table = $("employee_info");

  while (table.rows.length > 1) {
    table.deleteRow(1);
  }

  for (var element of employee_list) {
    table.insertRow();

    for (var cell of element) {
      var newCell = table.rows[table.rows.length - 1].insertCell();
      newCell.textContent = cell;
    }
    var deleteCell = table.rows[table.rows.length - 1].insertCell();
    var button = document.createElement("input");
    button.type = "button";
    button.value = "Delete";
    button.addEventListener('click', function () {
        deleteItem(element);
      });
    deleteCell.appendChild(button);
    deleteCell.id = "delete";
    

  }
  
  updateEmployeeCount();
}
function addItem(e) {
    employee_list.push(e);
    table();
  }
function updateEmployeeCount() {
    $("employeeCount").innerHTML = employee_list.length;
}
function deleteItem(e) {
    var index = employee_list.indexOf(e);
    employee_list.splice(index, 1);
    table();
  }

var processEntries = function () {
    "use strict";
    var header, html, required, msg, name, title, extension, contact, terms;
    
    header = "";
    html = "";
    name = $("name").value;
    title = $("title").value;
    extension = $("extension").value;
    contact = "Text";
    var flag= true;
    function validate(){
        if (name === "") {
            var errorname = "Please enter the name !!!";
            $("eName").innerHTML= errorname;
            flag=false;
        }
        if (title === "") {
            var errortitle="please enter title!!!";
            $("eTitle").innerHTML= errortitle;
            flag=false;
        }
        if (extension === "") {
            var eext="please enter extension!!!";
            $("eEx").innerHTML= eext;
            flag=false;
        }
    }
    validate();
    if(flag){
        $("eName").innerHTML= "";
        $("eTitle").innerHTML= "";
        $("eEx").innerHTML= "";
        addItem([$("name").value, $("title").value, $("extension").value]);
        $("form1").reset();

    }       
}   


window.addEventListener("load", function () {
    "use strict";
    table();
    $("add").addEventListener("click",processEntries);
    $("form1").reset();
  });