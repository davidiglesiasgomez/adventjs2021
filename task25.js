function canMouseEat(direction, game) {
    let mouse = []
    for (let y=0; y<game.length; y++) {
        for (let x=0; x<game[y].length; x++) {
        if (game[y][x] === 'm') {
            if (direction === 'up') mouse = [y-1, x]
            if (direction === 'down') mouse = [y+1, x]
            if (direction === 'right') mouse = [y, x+1]
            if (direction === 'left') mouse = [y, x-1]
            break
        }
        }
    }
    return ( mouse[0] >= 0 && mouse[0] < game.length && mouse[1] >= 0 && mouse[1] < game[0].length && game[mouse[0]][mouse[1]] === '*' ? true : false )
}

const room = [
    [' ', ' ', ' '],
    [' ', ' ', 'm'],
    [' ', ' ', '*']
]

console.log('up', canMouseEat('up',    room), '   // false')
console.log('down', canMouseEat('down',  room), '   // true')
console.log('right', canMouseEat('right', room), '   // false')
console.log('left', canMouseEat('left',  room), '   // false')

const room2 = [
['*', ' ', ' ', ' '],
[' ', 'm', '*', ' '],
[' ', ' ', ' ', ' '],
[' ', ' ', ' ', '*']
]

console.log('up', canMouseEat('up',    room2), '   // false')
console.log('down', canMouseEat('down',  room2), '   // false')
console.log('right', canMouseEat('right', room2), '   // true')
console.log('left', canMouseEat('left',  room2), '   // false')