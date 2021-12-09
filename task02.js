const carta = 'bici coche balón _playstation bici coche peluche'

function listGifts(letter) {
    let regalos = letter.split(' ')
    let retorno = {}
    regalos.forEach(regalo => {
        if (regalo.charAt(0) === '_' || regalo.charAt(0) === '') {
            return
        }
        if (typeof retorno[regalo] === 'undefined') {
            retorno[regalo] = 0
        }
        retorno[regalo]++
    });
    return retorno
}

const regalos = listGifts(carta)

console.log(regalos)
/*
{
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}
*/