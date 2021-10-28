



function getRandomeArbitrary(min,max){
    return Math.round(Math.random() * (max - min) + min);
}

var theNumbers = new Array(6);

var numbers = 20;
for (i=0; i<6;i++){
    r = getRandomeArbitrary(0,20);
    console.log("Numbers " + i + " = " + r);
    theNumbers[i] = r;
}

theNumbers.sort(function(a, b) { return a -b});

console.log(theNumbers);