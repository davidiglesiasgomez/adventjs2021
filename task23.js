function canReconfigure(from, to) {
  if (from.length !== to.length) return false
  let map = []
  for (let i=0; i<from.length; i++) {
    if (map[to[i]] !== undefined && map[to[i]] !== from[i]) {
      return false
    }
    for (var key in map) {
      if (map[key] === from[i] && key !== to[i]) {
        return false
      }
    }
    map[to[i]] = from[i]
  }
  return true
}

let from = 'BAL'
let to   = 'LIB'
// console.log(canReconfigure(from, to), '// true')
/* la transformación sería así:
B -> L
A -> I
L -> B
*/

from = 'CON'
to   = 'JUU'
// console.log(canReconfigure(from, to), '// false')
/* no se puede hacer la transformación:
C -> J
O -> U
N -> FALLO
*/

from = 'MMM'
to   = 'MID'
console.log(canReconfigure(from, to), '// false')
/* no se puede hacer la transformación:
M -> M (BIEN, asigna el mismo carácter a si mismo)
M -> I (FALLO, asigna el mismo carácter a dos letras distintas)
M -> D (FALLO, asigna el mismo carácter a dos letras distintas)
*/

from = 'AA'
to   = 'MID'
// console.log(canReconfigure(from, to), '// false -> no tiene la misma longitud')