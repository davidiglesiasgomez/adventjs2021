function fixFiles(files) {
    let retorno = []
    let contador = {}
    for (let i=0; i<files.length; i++) {
        contador[files[i]] = ( typeof contador[files[i]] === 'undefined' ? 0 : contador[files[i]] + 1 )
        retorno[i] = files[i] + ( contador[files[i]] > 0 ? '(' + contador[files[i]] + ')' : '' )
    }
    return retorno
}

const files = ['photo', 'postcard', 'photo', 'photo', 'video']
console.log(fixFiles(files)) // ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']

const files2 = ['file', 'file', 'file', 'game', 'game']
console.log(fixFiles(files2))  // ['file', 'file(1)', 'file(2)', 'game', 'game(1)']

const files3 = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)']
console.log(fixFiles(files3)) // ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']
