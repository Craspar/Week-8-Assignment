
var z = prompt("Please enter a list of numbers separated by commas ',': ")


function counter(x){

    var i;
    var negnum = 0;
    var zeronum = 0;
    var posnum = 0;

    var numArr = x.split(",");

    for( i=0 ; i<numArr.length ; i++){
        numArr[i] = parseInt(numArr[i]);
        
    }



    for(i=0 ; i<numArr.length ; i++){

        if(numArr[i]==0){
            zeronum++;
        }
        else if(numArr[i]<0){
            negnum++;
        }
        else{
            posnum++;
        }
    }

    countArr = [negnum, zeronum, posnum];

    
    return countArr;

}

document.write("<p>Less Than 0: " + counter(z)[0] + "<br>Equal to 0: " + counter(z)[1] + "<br>Greater than 0: " + counter(z)[2] + "</p>");

