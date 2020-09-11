function bestTimeToBuyAndSellStockI(prices){
    if(prices === null || prices.length <=1){
        return 0;
    }

    let profit = 0;

    for(let i=1; i<prices.length; i++){
        let diff = prices[i] - prices[i-1];
        if(diff > 0){
            profit += diff;
        }
    }
    return profit;
}