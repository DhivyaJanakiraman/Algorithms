
function bestTimeToBuyAndSellStock(prices) {
    let max = 0;
    let min = Number.MAX_SAFE_INTEGER;

    for(let i=0; i<prices.length; i++){
        if(prices[i] < min){
            min = prices[i];
        } else {
            max = Math.max(max, prices[i] - min);
        }
    }
    return max;
}

// alternate

function bestTimeToBuyAndSellStock(prices){
    if(prices===null || prices.length <=1){
        return 0;
    }

    let min = prices[0];
    let max = 0;

    for(let i=1; i<prices.length; i++){
        max = Math.max(max, prices[i]-min);
        min = Math.min(min, prices[i]);
    }

    return max;
}

//[7,1,5,3,6,4]
// 6-1 -> 5