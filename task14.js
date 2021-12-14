function missingReindeer(ids) {
    let length = ids.length + 1
    let populate = [...Array(length).keys()]
    let found = populate.find(id => {return !ids.includes(id)})
    return found
}

console.log('[0, 2, 3]', missingReindeer([0, 2, 3]), '// -> 1')
console.log('[5, 6, 1, 2, 3, 7, 0]', missingReindeer([5, 6, 1, 2, 3, 7, 0]), '// -> 4')
console.log('[0, 1]', missingReindeer([0, 1]), '// -> 2 (¡es el último el que falta!)')
console.log('[3, 0, 1]', missingReindeer([3, 0, 1]), '// -> 2')
console.log('[9, 2, 3, 5, 6, 4, 7, 0, 1]', missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1]), '// -> 8')
console.log('[0]', missingReindeer([0]), '// -> 1 (¡es el último el que falta!)')