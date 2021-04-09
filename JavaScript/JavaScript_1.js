
//Switch statements

function switch_Function() {
    var Frog_Output;
    var Frogs = document.getElementById("Frog_Choice").value; 
    var Frog_String = " is a great frog!"
    switch (Frogs) {
        case "Dart Frog":
            Frog_Output = "The " +"Dart Frog" + Frog_String;
        break;
        case "Bull Frog":
            Frog_Output = "The " +"Bull Frog" + Frog_String;
        break;
        case "Tree Frog":
            Frog_Output = "The " +"Tree Frog" + Frog_String;
        break;
        case "Rain Frog":
            Frog_Output = "The " + "Rain Frog" + Frog_String;
        break;
        case "Kermit The Frog":
            Frog_Output = "Kermit The Frog" + Frog_String;
        break;
        default:
        Frog_Output = "Please enter a frog exactly as listed above!";
    }
    document.getElementById("Output").innerHTML= Frog_Output; 
}


//getElementsByClassName Practice
function Hello_World (){
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "This text has changed!"
}

//Canvas and Graphics
function c_Function() {
var canvas = document.getElementById("Canvas");
var c = canvas.getContext ("2d");
c.fillRect(100, 100, 100, 100);
c.fillRect(300, 300, 300, 300);
c.beginPath();
c.arc(250, 250, 40, 0, 2 * Math.PI);
c.stroke();
}

//Canvas Gradient 
var canvas = document.getElementById("Gradient");
var c = canvas.getContext ("2d")

var grd = c.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "green");
grd.addColorStop(1, "purple");

c.fillStyle = grd;
c.fillRect(0, 0, 500, 500);