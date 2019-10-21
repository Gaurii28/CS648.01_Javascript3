var employee_list = [["Shital", "CEO", "001"], ["kinjal", "CFO", "002"], ["shilpa", "Manager", "003"], ["rajesh", "Vice President", "004"], ["animesh", "Associate", "005"]];

var $ = function (id) {
  "use strict";
  return document.getElementById(id);
}

function table() {
  var table = $("einfo");

  while (table.rows.length > 1) {
    table.deleteRow(1);
  }

  for (var element of employee_list) {
    table.insertRow();

    for (var cell of element) {
      var newCell = table.rows[table.rows.length - 1].insertCell();
      newCell.textContent = cell;
    }
    var dCell = table.rows[table.rows.length - 1].insertCell();
    var button = document.createElement("input");
    button.type = "button";
    button.value = "Delete";
    button.id= element[2];
    dCell.appendChild(button);
    dCell.id = "delete";
  }
  for (let index = 0; index < employee_list.length; index++) {
      $(employee_list[index][2]).addEventListener("click",delItem);
      
  }
  eCount();
}
function addItem(e) {
    employee_list.push(e);
    table();
  }
function eCount() {
    $("eCount").innerHTML = employee_list.length;
}
function delItem(e) {
    var h2 = e.currentTarget;
    for (let index = 0; index < employee_list.length; index++) {
      if (employee_list[index][2] == h2.id) {
        employee_list.splice(index, 1);
        break;
      }
    }
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
