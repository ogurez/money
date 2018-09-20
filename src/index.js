// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
   
    let Error={
        error: "You are rich, my friend! We don't have so much coins for exchange"
    }

    let money=[1,5,10,25,50];
    let index=money.length-1;
    let splits=[];
    let empty={};
    let exchange={};
    let colh=1;
    let colq=1;
    let cold=1;
    let coln=1;
    let colp=1;
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
            
            if(money[index]==50){
                exchange.H=colh++;
            }
            else if(money[index]==25){
                exchange.Q=colq++;
            }
            else if(money[index]==10){
                exchange.D=cold++;
            }
            else if(money[index]==5){
                exchange.N=coln++;
            }
            else if(money[index]==1){
                exchange.P=colp++;
            }

        }
        else index--;
    }
    /*if(money.indexOf(currency)!==0){
        return money[money.indexOf(currency)];
}*/
   return exchange;
}