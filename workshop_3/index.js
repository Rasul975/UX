// var name = prompt("What is your name?");
// if(name != null && name != ""){
//     document.getElementById("helloText").innerHTML = "Hello " + name + "!";
// } else {
//     document.getElementById("helloText").innerHTML = "none";
// }

function escapeHTML(html){
    return html.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

for (i = 0; i < 4; i++) {
    var x = "txt" + i;
    var h = document.getElementById(x).innerHTML;
    h = escapeHTML(h);
    var t = document.getElementById(x).textContent;
    document.write("<p>innerHTML = " + h + " textContent= " + t + "</p>");
}