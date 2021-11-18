// function onclickHandler(event){
//     alert('Button ' + this.id + ' has just been clicked');
// }
// document.getElementById('myButton').addEventListener('click', onclickHandler, false);

function validate_form(thisform){
    with (thisform) {
        if (fname.value == "" | lname.value == ""){
            fname.focus();
            alert("Please enter your name");
            return false;
        }

        if (fname.value.length < 5){
            fname,focus();
            alert("Enter a name longer than 5 characters");
            return false;
        }
        if (validate(age) == false){
            return false;
        }
    }
}

function validate(x){
    if (isNaN(x.value)){
        x.value += " is not a number";
        x.style.borderColor = '#ff0000';
        return false
    }
}

var fname = document.getElementById('fname');
var lname = document.getElementById('lname');
var email= document.getElementById('mail');

function oninputHandler(event) {
    email.value = fname.value + "." + lname.value + "@edu.salford.ac.uk";
}
fname.addEventListener("input", oninputHandler, false);
lname.addEventListener("input", oninputHandler, false);
