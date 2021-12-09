function isValid(letter) {
    let open = -1
    for (let i=0; i<letter.length; i++) {
        if (letter[i] === '(' && open !== -1) {
            return false
        }
        if (letter[i] === '(') {
            open = i
        }
        if (letter[i] === ')' && open !== -1 && open !== (i-1)) {
            open = -1
        }
        if ((letter[i] === '{' || letter[i] === '[') && open !== -1) {
            return false
        }
    }
    if (open !== -1) {
        return false
    }
    return true
}

let carta = ''

carta = 'bici coche (balón) bici coche peluche'
console.log(carta, isValid(carta))
carta = '(muñeca) consola bici'
console.log(carta, isValid(carta))
carta = 'bici coche (balón bici coche'
console.log(carta, isValid(carta))
carta = 'peluche (bici [coche) bici coche balón'
console.log(carta, isValid(carta))
carta = '(peluche {) bici'
console.log(carta, isValid(carta))
carta = '() bici'
console.log(carta, isValid(carta))
