var maxProfit = function(prices) {
    //Brute force is too slow, refactor.
    //Since we are looking for a dynamic size of days to find the most opitimal profit:
    //Dynmamic sliding window.

    let left = 0;
    let right = 1;

    let maxProfit = 0;

    while(right < prices.length && left != right){
        
        //Compute profit, update if needed.
        let profit = prices[right] - prices[left];
        if(profit > maxProfit){
            maxProfit = profit;
        }
        
        //Sliding window:
        //Expand window rightward, until we find a smaller value than our leftside, then reset to a size two  window.
        if(prices[right] < prices[left]){
            left = right;
            right = left + 1;
        }
        else{
            right++;
        }
    
    }


    return maxProfit;
};
