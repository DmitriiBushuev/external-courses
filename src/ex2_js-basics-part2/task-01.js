var getTypeVar = function(inputVar){
    if (typeof inputVar === "string"){
        return "string";
    }

    if (typeof inputVar === "number"){
        return "number";
    }

    return undefined;
}

module.exports = getTypeVar;
