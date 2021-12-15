function checkSledJump(heights) {
    let subiendo=true
    for (let i=1; i<heights.length; i++) {
        if (subiendo && heights[i]>heights[i - 1]) {
            continue
        }
        if (subiendo && heights[i]<heights[i - 1]) {
            subiendo=false
        }
        if (!subiendo && heights[i]>heights[i - 1]) {
            return false
        }
        if (heights[i]===heights[i - 1]) {
            return false
        }
    }
    if (subiendo===true) {
        return false
    }
    return true
}

console.log('[1, 2, 3, 2, 1]', checkSledJump([1, 2, 3, 2, 1]), '// true: sube y baja de forma estricta')
console.log('[0, 1, 0]', checkSledJump([0, 1, 0]), '// -> true: sube y baja de forma estricta')
console.log('[0, 3, 2, 1]', checkSledJump([0, 3, 2, 1]), '// -> true: sube y baja de forma estricta')
console.log('[0, 1000, 1]', checkSledJump([0, 1000, 1]), '// -> true: sube y baja de forma estricta')

console.log('[2, 4, 4, 6, 2]', checkSledJump([2, 4, 4, 6, 2]), '// false: no sube de forma estricta')
console.log('[1, 2, 3]', checkSledJump([1, 2, 3]), '// false: sólo sube')
console.log('[1, 2, 3, 2, 1, 2, 3]', checkSledJump([1, 2, 3, 2, 1, 2, 3]), '// false: sube y baja y sube... ¡no vale!')