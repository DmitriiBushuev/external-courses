var inspectArray = function (inputArray){
    var numberOfElements = 0;

    for (i=0; i<inputArray.length; i++){
        console.log('Элемент массива [' + i + ']' + ' : ' + inputArray[i]);
        numberOfElements++
    }

    return ('Число элементов массива:' + numberOfElements);
}

module.exports = inspectArray;