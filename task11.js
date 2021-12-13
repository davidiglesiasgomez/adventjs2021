function shouldBuyFidelity(times) {
    let entrada = 12.0*times
    let tarjeta = 250.0
    for (let i=1; i<=times; i++) {
        tarjeta += 12.0 * Math.pow(0.75, i)
    }
    return ( tarjeta<entrada ? true : false )
}

console.log(1, shouldBuyFidelity(1), '// false -> Mejor comprar tickets de un sólo uso')
console.log(3, shouldBuyFidelity(3), '// false -> Mejor comprar tickets de un sólo uso')
console.log(100, shouldBuyFidelity(100), '// true -> Mejor comprar tarjeta fidelidad')
