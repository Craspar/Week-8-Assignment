
var z = prompt("Please enter a number: ");

function reverser(x){

    var num = x.split("");

    var revNum = num.reverse();

    return revNum.join("");
}

alert(z + " in reverse is: " + reverser(z));



