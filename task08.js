function maxProfit(prices) {
    let max = -1
    for (let i=0; i<prices.length-1; i++) {
        for (let j=i+1; j<prices.length; j++) {
            // console.log(`${prices[i]} ${prices[j]}`)
            if (prices[i]<prices[j] && prices[j]-prices[i]>max) {
                max = prices[j]-prices[i]
            }
        }
    }
    return max
}

const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
console.log(pricesBtc, maxProfit(pricesBtc), '// -> 16 (compra a 18, vende a 34)')

const pricesEth = [10, 20, 30, 40, 50, 60, 70]
console.log(pricesEth, maxProfit(pricesEth), '// -> 60 (compra a 10, vende a 70)')

const pricesDoge = [18, 15, 12, 11, 9, 7]
console.log(pricesDoge, maxProfit(pricesDoge), '// -> -1 (no hay ganancia posible)')

const pricesAda = [3, 3, 3, 3, 3]
console.log(pricesAda, maxProfit(pricesAda), '// -> -1 (no hay ganancia posible)')
