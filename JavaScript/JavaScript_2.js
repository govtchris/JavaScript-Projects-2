function validateForm() {
    var x = document.forms["myForm"]["fName"].value;
    var y = document.forms["myForm"]["lName"].value;
    var z = document.forms["myForm"]["DOB"].value;
    if (x == "") {
        alert("Please fill out full form");
        return false;
    }
    if (y == "") {
        alert("Please fill out full form");
        return false;
    }
    if (z == "") {
        alert("Please fill out full form");
        return false;
    }
}