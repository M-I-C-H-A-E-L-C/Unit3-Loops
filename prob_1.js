function classifyNumber(num){
    if (num == 0){
        console.log(num, ": zero");
    }
    else if (num%2 == 0 && num > 0){
        console.log(num, ": positive even");
    }
    else if (num%2 == 0 && num < 0){
        console.log(num, ": negative even");
    }
    else if (num%2 != 0 && num > 0){
        console.log(num, ": positive odd");
    }
    else if (num%2 != 0 && num < 0){
        console.log(num, ": negative odd");
    }
}

classifyNumber(5)
classifyNumber(-5)
classifyNumber(6)
classifyNumber(-6)
