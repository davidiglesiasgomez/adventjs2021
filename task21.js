function canCarry(capacity, trip) {
    let maximo = trip.reduce(( maximo, stage ) => { return ( maximo === -1 || stage[2] > maximo ? stage[2] : maximo ) }, -1)
    let carga = []
    for(let i=0; i<=maximo; i++) {
        carga[i] = 0
        trip.map(stage => {
            if (i >= stage[1] && i < stage[2]) {
                carga[i] += stage[0]
            }
        })
    }
    let cargaMaxima = Math.max(...carga)
    return ( capacity >= cargaMaxima ? true : false )
}

console.log('4, [[2, 5, 8], [3, 6, 10]]', canCarry(4, [[2, 5, 8], [3, 6, 10]]),  '// false\n')
console.log('3, [[1, 1, 5], [2, 2, 10]]', canCarry(3, [[1, 1, 5], [2, 2, 10]]),  '// true\n')
console.log('3, [[2, 1, 5], [3, 5, 7]]', canCarry(3, [[2, 1, 5], [3, 5, 7]]),  '// true -> nunca supera el máximo de capacidad\n')
console.log('4, [[2, 3, 8], [2, 5, 7]]', canCarry(4, [[2, 3, 8], [2, 5, 7]]),  '// true -> del punto 5 al 7 lleva 4 regalos y no supera el máximo\n')
console.log('1, [[2, 3, 8]]', canCarry(1, [[2, 3, 8]]),  '// false -> no podría ni con el primer viaje\n')
console.log('2, [[1, 2, 4], [2, 3, 8]]', canCarry(2, [[1, 2, 4], [2, 3, 8]]),  '// false\n')