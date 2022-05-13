

function appendRow() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById('lname').value;
    var city = document.getElementById('city').value;
    var state = document.getElementById('state').value;
    var country = document.getElementById('country').value;
    if (fname != "" && lname != "" && city != "" && state != "" && country != "") {
      document.getElementById("message").innerHTML = "";
      document.getElementById("mytablebody").innerHTML += "<tr>"
        + "<td>" + fname + "</td>"
        + "<td>" + lname + "</td>"
        + "<td>" + city + "</td>"
        + "<td>" + state + "</td>"
        + "<td>" + country + "</td>"
        + "</tr";
    } else {
      document.getElementById("message").innerHTML = "All fields are required";
    }
  }
  
  function resetTable() {
  
    var fname = document.getElementById("fname").value = "";
    var lname = document.getElementById('lname').value = "";
    var city = document.getElementById('city').value = "";
    var state = document.getElementById('state').value = "";
    var country = document.getElementById('country').value = "";
    document.getElementById("message").innerHTML = "";
    document.getElementById("mytablebody").innerHTML = "";
  
  
  }