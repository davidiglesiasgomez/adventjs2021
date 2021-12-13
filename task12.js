function getMinJump(obstacles) {
    let maximo=Math.max(...obstacles)
    let retorno=0
    for (let salto=1; salto<=maximo; salto++) {
        let collide=false
        for (let posicion=0; posicion<=maximo; posicion=posicion+salto) {
            if (obstacles.includes(posicion)) {
                collide=true
                break
            }
        }
        if (!collide) {
            retorno = salto
            break
        }
    }
    return retorno
}

let obstacles = [5, 3, 6, 7, 9]
console.log('[5, 3, 6, 7, 9]', getMinJump(obstacles), '// -> 4')

obstacles = [2, 4, 6, 8, 10]
console.log('[2, 4, 6, 8, 10]', getMinJump(obstacles), '// -> 7')

obstacles = [14, 10, 8, 2, 3, 6]
console.log('[14, 10, 8, 2, 3, 6]', getMinJump(obstacles), '// -> 9')
