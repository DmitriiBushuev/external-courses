var inspectArray = function (inputArray){
    for (const i of inputArray) {
        console.log('inputArray[' + inputArray.indexOf(i) + '] = ' + i);
    }

    console.log('Число элементов массива:' + inputArray.length);
}

module.exports = inspectArray;