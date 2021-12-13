function wrapGifts(gifts) {
    if (gifts.length === 0 ) {
        return []
    }
    let retorno = []
    let ancho = gifts[0].length
    retorno.push('*'.repeat(2+ancho))
    for (let i=0; i<gifts.length; i++) {
        retorno.push('*' + gifts[i] + '*')
    }
    retorno.push('*'.repeat(2+ancho))
    return retorno
}

console.log([], wrapGifts([]) )
console.log(["📷", "⚽️"], wrapGifts(["📷", "⚽️"]) )
console.log(["🏈🎸", "🎮🧸"], wrapGifts(["🏈🎸", "🎮🧸"]) )
console.log(["📷"], wrapGifts(["📷"]) )