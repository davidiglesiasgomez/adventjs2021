const almacen = {
    'estanteria1': {
        'cajon1': {
            'producto1': 'coca-cola',
            'producto2': 'fanta',
            'producto3': 'sprite'
        }
    },
    'estanteria2': {
        'cajon1': 'vacio',
        'cajon2': {
            'producto1': 'pantalones',
            'producto2': 'camiseta' // <- ¡Está aquí!
        }
    }
}

const otroAlmacen = {
    'baul': {
        'fondo': {
        'objeto': 'cd-rom',
        'otro-objeto': 'disquette',
        'otra-cosa': 'mando'
        }
    }
}

function contains(store, product) {
    let find = false
    if (typeof store !== 'object') {
        find = find || ( store === product ? true : false )
    } else {
        let keys = Object.keys(store)
        keys.forEach(key => {
            let child_store = store[key]
            find = find || contains(child_store, product)
        })
    }
    return find
}

console.log( contains(almacen, 'camiseta') ) // true
console.log( contains(otroAlmacen, 'gameboy') ) // false
