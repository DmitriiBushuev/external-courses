var findMaxElement = function(inputArray){
    var maxElement = inputArray[0];

    for (i=1; i < inputArray.length; i++){
        if (inputArray[i] > maxElement){
            maxElement = inputArray[i];
        } 
    }

    return maxElement;
}

module.exports = findMaxElement;