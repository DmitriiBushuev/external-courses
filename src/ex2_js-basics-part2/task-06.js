var simpleNumb = function(inputNumb){
    var simpleFlag = true;

    if (typeof inputNumb == "number"){
        if (inputNumb < 0){
            return 'простые числа - положительные!';
        }
    
        if (inputNumb > 1000){
            return 'Данные неверны';
        }
    
        for (i = 2; i <= (inputNumb / 2); i++)
        {
            if (inputNumb % i == 0)
            {
                simpleFlag = false;
                break;
            }
        }
    
        if(simpleFlag){
            return ('Число ' + inputNumb + ' - простое число');
        }
        else{
            return ('Число ' + inputNumb + ' - составное число');
        }
    }
    else{
        return 'не число!';
    }
}

module.exports = simpleNumb;