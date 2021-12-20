function pangram(letter) {
    const alphabet = [...'abcdefghijklmnñopqrstuvwxyz']
    const letters = [...letter]
    letters.map(character => {
        let index = alphabet.indexOf(character.toLowerCase())
        if (index !== -1) {
            alphabet.splice(index, 1)
        }
    })
    return ( alphabet.length === 0 ? true : false )
}

console.log('Extraño pan de col y kiwi se quemó bajo fugaz vaho', pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho'), '// true')
console.log('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!', pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!'), '// true')
console.log('Esto es una frase larga pero no tiene todas las letras del abecedario', pangram('Esto es una frase larga pero no tiene todas las letras del abecedario'), '// false')
console.log('De la a a la z, nos faltan letras', pangram('De la a a la z, nos faltan letras'), '// false')