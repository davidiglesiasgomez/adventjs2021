function groupBy(collection, it) {
    let retorno = {}
    collection.forEach(element => {
        let key = undefined
        if (typeof it === 'function') {
            key = it(element)
        } else if (typeof it === 'string' && typeof element[it] !== undefined) {
            key = element[it]
        }
        if (typeof retorno[key] === 'undefined') {
            retorno[key] = []
        }
        retorno[key].push(element)
    })
    return retorno
}

console.log("([6.1, 4.2, 6.3], Math.floor)", groupBy([6.1, 4.2, 6.3], Math.floor), "// { 6: [6.1, 6.3], 4: [4.2] }")
console.log("(['one', 'two', 'three'], 'length')", groupBy(['one', 'two', 'three'], 'length'), "// { 3: ['one', 'two'], 5: ['three'] }")
console.log("([{age: 23}, {age: 24}], 'age')", groupBy([{age: 23}, {age: 24}], 'age'), "// { 23: [{age: 23}], 24: [{age: 24}] }")
console.log("([1397639141184, 1363223700000], timestamp => new Date(timestamp).getFullYear())", groupBy([1397639141184, 1363223700000], timestamp => new Date(timestamp).getFullYear()), "// { 2013: [1363223700000], 2014: [1397639141184] }")
console.log("([{ title: 'JavaScript: The Good Parts', rating: 8 }, { title: 'Aprendiendo Git', rating: 10 }, { title: 'Clean Code', rating: 9 }], 'rating')", groupBy([{ title: 'JavaScript: The Good Parts', rating: 8 }, { title: 'Aprendiendo Git', rating: 10 }, { title: 'Clean Code', rating: 9 }], 'rating'), "// { 8: [{ title: 'JavaScript: The Good Parts', rating: 8 }], 9: [{ title: 'Clean Code', rating: 9 }], 10: [{ title: 'Aprendiendo Git', rating: 10 }] }")