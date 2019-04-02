var equalValuesArray = function(inputArray){
     for(i=1; i<(inputArray.length); i++){
        if (inputArray[0] === inputArray[i]){
            continue;
        }
        else{
            return false;
        }
    }

    return true;
}

module.exports = equalValuesArray;