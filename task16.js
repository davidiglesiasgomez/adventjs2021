function decodeNumbers(symbols) {
    let traduccion = {
        '.': 1,
        ',': 5,
        ':': 10,
        ';': 50,
        '!': 100
    }
    let total = 0
    for (let i=0; i<symbols.length; i++) {
        if (typeof traduccion[symbols[i]] === 'undefined') return NaN
        total += ( i < symbols.length - 1 && traduccion[symbols[i]] < traduccion[symbols[i+1]] ? -1 : 1 ) * traduccion[symbols[i]]
    }
    return total
}

console.log('...', decodeNumbers('...'), '// 3')
console.log('.,', decodeNumbers('.,'), '// 4 (5 - 1)')
console.log(',.', decodeNumbers(',.'), '// 6 (5 + 1)')
console.log(',...', decodeNumbers(',...'), '// 8 (5 + 3)')
console.log('.........!', decodeNumbers('.........!'), '// 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)')
console.log('.;', decodeNumbers('.;'), '// 49 (50 - 1)')
console.log('..,', decodeNumbers('..,'), '// 5 (-1 + 1 + 5)')
console.log('..,!', decodeNumbers('..,!'), '// 95 (1 - 1 - 5 + 100)')
console.log('.;!', decodeNumbers('.;!'), '// 49 (-1 -50 + 100)')
console.log('!!!', decodeNumbers('!!!'), '// 300')
console.log(';!', decodeNumbers(';!'), '// 50')
console.log(';.W', decodeNumbers(';.W'), '// NaN')