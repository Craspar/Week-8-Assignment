
var z = prompt("Please enter a word or phrase:").toLowerCase();


function first_vowel(x){

var lvowel;
var y;
var xArr;

xArr = x.split("");

for(y=0 ; y<xArr.length ; y++){

    if(xArr[y] == 'a'|| xArr[y] == 'e'|| xArr[y] == 'i'|| xArr[y] == 'o'|| xArr[y] == 'u'|| xArr[y] == 'y'){
        lvowel == y;

        break;
    }
    else{

    }

}

return y;

}


alert("The left most vowel of '" + z + "' is located at: " + first_vowel(z));