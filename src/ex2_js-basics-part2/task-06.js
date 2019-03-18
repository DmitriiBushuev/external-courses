var simpleNumb = function(inputNumb){
    var simpleFlag = true;

    if(inputNumb === 1){
        return 'Введен 1'
    }

    if(inputNumb === 0){
        return 'Введен 0'
    }

    if (typeof inputNumb == "number"){
        if (inputNumb < 0){
            return 'простые числа - положительные!';
        }
    
        if (inputNumb > 1000){
            return 'введите число не больше 1000!';
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
            return (inputNumb + ' - простое число');
        }
        else{
            return (inputNumb + ' - составное число');
        }
    }
    else{
        return 'не число!';
    }
}

module.exports = simpleNumb;