function onclickHandler(event){
    alert('Button ' + this.id + ' has just been clicked');
}
document.getElementById('myButton').addEventListener('click', onclickHandler, false);

function validate_form(thisform){
    with (thisform) {
        if (name.value == ""){
            name.focus();
            alert("Please enter your name");
            return false;
        }

        if (name.value.length < 5){
            name,focus();
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