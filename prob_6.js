function primesUnder(limit){
    let PrimeNum = [];

    for(let CheckNum = 2; CheckNum < limit; CheckNum++){
        let isPrime = true
        for(let i = 2; i <= Math.sqrt(CheckNum); i++){
            if(CheckNum % i === 0){
                isPrime = false;
                break;
            }
        }        //else(PrimeNum.push(i))
        if (isPrime){
            PrimeNum.push(CheckNum);
        }    
    }
    console.log(PrimeNum);
}
primesUnder(500);
