// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    
    let Error={
        error: "You are rich, my friend! We don't have so much coins for exchange"
    }

    let money=[50,25,10,5,1];
    let index=money.length-1;
    let splits=[];
    let empty={};

    if(currency<=0){
        return empty;
    }
    else if(currency>10000){
        return Error;
    }
    while(currency>=money[0]){
        if(currency>=money[index]){
            currency -=money[index];
            splits.push(money[index]);
        }
        else index--;
    }
    /*if(money.indexOf(currency)!==0){
        return money[money.indexOf(currency)];
}*/
   return splits;
}