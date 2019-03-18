var advancedInspectArray = function(inputArray){
    var evenNumb = 0, notEvenNumb = 0, zeroNumb = 0;
    
    for (i=0; i<(inputArray.length); i++){
        if (isNaN(inputArray[i])){
            continue;
        }
        
        if ((inputArray[i]) == 0){
            zeroNumb++;
            continue;
        }
        
        switch ((inputArray[i]) % 2){
            case 0:
                evenNumb++;
                break;
            default:
                notEvenNumb++;
        }
    }
    
    console.log('четных:' + evenNumb + ';' + ' нечетных:' + notEvenNumb + ';' + ' нуль:' + zeroNumb + ';');
    var outputArray = [evenNumb, notEvenNumb, zeroNumb];
    return (outputArray);
}

module.exports = advancedInspectArray;