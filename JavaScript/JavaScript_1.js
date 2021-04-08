
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