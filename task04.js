function createXmasTree(height) {
    if (height<1 || height > 100) return ''
    let ancho = height * 2 - 1
    let retorno = ''
    let espacios = 0
    let estrellas = 0
    for (let i=1; i<=height; i++) {
        estrellas = i * 2 - 1
        espacios = ( ancho - estrellas ) / 2
        retorno += '_'.repeat(espacios)
        retorno += '*'.repeat(estrellas)
        retorno += '_'.repeat(espacios)
        retorno += "\n"
    }
    espacios = ( ancho - 1 ) / 2
    retorno += '_'.repeat(espacios) + '#' + '_'.repeat(espacios)
    retorno += "\n"
    retorno += '_'.repeat(espacios) + '#' + '_'.repeat(espacios)
    return retorno
}

// console.log(createXmasTree(1))

// console.log(createXmasTree(2))

// console.log(createXmasTree(3))

// console.log(createXmasTree(5))

console.log(createXmasTree(100))