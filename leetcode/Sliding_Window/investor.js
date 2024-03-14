/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
  let firstP=0;
  let lastP=1;
  let smallest=prices[firstP];
  let largest=prices[lastP];
  while(prices[lastP]){
      if(prices[firstP] > prices[lastP]){
          firstP+=1;
      }else if(prices[lastP] >= prices[firstP] && lastP<prices.length){
          lastP+=1;
      }

      smallest=Math.min(prices[firstP],smallest);
      if(lastP !== prices.length){
        largest=Math.max(prices[lastP],largest);

      }
      console.log("smallest", smallest);
      console.log("largest", largest);

  }
  
  return largest-smallest > 0 ? largest-smallest: 0;
  
};
console.log(maxProfit([7,1,5,3,6,4]));




// console.log(maxProfit([7,6,4,3,1]));

// 121. Best Time to Buy and Sell Stock
// Easy
// Topics
// Companies
// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.
 

// Constraints:

// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104