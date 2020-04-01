/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    //array [2,4,1]
    //array [7,1,5,3,6,4]
    //array [7,3,2,10,4,1,6]
    if(prices == null || prices.length == 0){
        return 0;
    }
    
    var min = prices[0];
    var maxprofit  = 0;
    for(var i=1;i<prices.length;i++){
        if(prices[i] < min ){
            min = prices[i];
            continue;
        }
        maxprofit = Math.max(prices[i] - min,maxprofit);
    }
    return maxprofit;
     
};