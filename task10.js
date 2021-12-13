

function getCoins(change) {
    let coins = [1, 2, 5, 10, 20, 50]
    let retorno = [0, 0, 0, 0, 0, 0]
    let modulo = 0
    for (let i=5; i>=0; i--) {
        if (change === 0) {
            break
        }
        if (change<coins[i]) {
            continue
        }
        modulo = change % coins[i]
        retorno[i] = (change - modulo)/coins[i]
        change = modulo
    }
    return retorno
}

console.log(51, getCoins(51), '// [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos')
console.log(3, getCoins(3), '// [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2')
console.log(5, getCoins(5), '// [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos')
console.log(16, getCoins(16), '// [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10')
console.log(100, getCoins(100), '// [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos')