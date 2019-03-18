var equalValuesArray = function(inputArray){
    var equalFlag = true;
    
    for(i=1; i<(inputArray.length); i++){
        if (inputArray[0] === inputArray[i]){
            continue;
        }
        else{
            equalFlag = false;
            break;
        }
    }

    return equalFlag;
}

module.exports = equalValuesArray;