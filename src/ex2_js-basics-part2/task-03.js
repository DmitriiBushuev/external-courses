var advancedInspectArray = function(inputArray){
	var zeroNumb = 0, evenNumb = 0, notEvenNumb = 0;

    arrayForCount = inputArray.filter(function(element){
		return element !== null;
	})

	for (var i=0;i<arrayForCount.length;i++){  	   
        if (arrayForCount[i] === 0){
            zeroNumb++;
        } else if ((arrayForCount[i] % 2) === 0){
            evenNumb++;
        } else {
            notEvenNumb++;
        }       
	}    

  return [evenNumb, notEvenNumb, zeroNumb];
}

module.exports = advancedInspectArray;
