module.exports = function makeExchange(currency) {
   
    const Error={
        error: "You are rich, my friend! We don't have so much coins for exchange"
    }

    const money={
        H: 50,
        Q: 25,
        D: 10,
        N: 5,
        P: 1,};

    const exchange={};

    if(currency<=0){
        return exchange;
    }
    else if(currency>10000){
        return Error;
    }

    let curCurrency=currency;

    for(let key in money){
        if(curCurrency>=money[key]){
            value=Math.floor(curCurrency/money[key]);
            curCurrency -=value*money[key];
            exchange[key]=value;
        }

    }
    
   return exchange;
}