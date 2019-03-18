var getTypeVar = function(inputVar){
    if (typeof inputVar === "number"){
        return "number";
    }

    if (typeof inputVar === "string"){
        return "string";
    }

    return 'введите число или строку';
}

module.exports = getTypeVar;
