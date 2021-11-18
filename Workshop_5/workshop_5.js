var fname = document.getElementById("fname");
var p1 = document.getElementById("output");

function oninputHandler(event){
    p1.innerHTML = "Name = " + fname.value;
}

document.getElementById("fname").addEventListener("input", oninputHandler, false);



var n1 = document.getElementById('n1');
var n2 = document.getElementById('n2');
var n3 = document.getElementById('n3');
var p1 = document.getElementById('output');

function oninputHandler(event){
    if(n1.value.length == 2){
        n2.focus();
    }
    if(n2.value.length == 2){
        n3.focus();
    }

    p1.innerHTML = n1.value + "-" + n2.value + "-" + n3.value;
    if(n3.value.length == 2){
        n3.blur();
    }
}

for(i=1 ; i <= 3; i++){
    document.getElementById('n'+i).addEventListener('input', oninputHandler, false);
}

// document.getElementById('n1').addEventListener('input', oninputHandler, false);
// document.getElementById('n2').addEventListener('input', oninputHandler, false);
// document.getElementById('n3').addEventListener('input', oninputHandler, false);