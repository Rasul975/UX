var numbers = 20;
const toDraw = 6;
var r;

var lotteryNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

function getRandomeArbitrary(min,max){
    return Math.round(Math.random() * (max - min) + min);
}

var yourNumbers = new Array(6);
var yourNum;

for (i=0;i<toDraw;i++){
    r = getRandomeArbitrary(0, numbers - 1);
    yournum = lotteryNumbers[r];
    lotteryNumbers.splice(r, 1);
    document.write("Pos " + r + " Number " + (i+1) + " = " + yournum + "<br>");
    document.write(lotteryNumbers + "<br>");
    numbers--;
    yourNumbers[i] = yournum;
}

yourNumbers.sort(function (a,b){
    return a -b;
})
document.write("<strong>" + yourNumbers + "</strong>");