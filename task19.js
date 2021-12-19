function learn(time, courses) {
  let mejor = [-1, -1]
  for (let i=0; i<courses.length-1; i++) {
    for (let j=i+1; j<courses.length; j++) {
      if ((courses[i] + courses[j] <= time) && ((mejor[0] === -1 && mejor[1] === -1) || (courses[i] + courses[j] > courses[mejor[0]] + courses[mejor[1]]))) {
        mejor[0] = i
        mejor[1] = j
      }
    }
  }
  mejor = ( mejor[0] !== -1 && mejor[1] !== -1 ? mejor : null )
  return mejor
}


console.log('10, [2, 3, 8, 1, 4]', learn(10, [2, 3, 8, 1, 4]), '// [0, 2] -> con 10 horas disponibles lo mejor es que completemos los cursos en el índice 0 y 2.')

console.log('15, [2, 10, 4, 1]', learn(15, [2, 10, 4, 1]), '// [1, 2] -> Los cursos en [1, 2] son 14 horas, es la mejor opción.')

console.log('25, [10, 15, 20, 5]', learn(25, [10, 15, 20, 5]), '// [0, 1] -> los cursos [0, 1] y [2, 3] completan exactamente con 25 horas pero siempre devolvemos el primero que encontremos')

console.log('8, [8, 2, 1]', learn(8, [8, 2, 1]), '// [1, 2] -> para hacer dos cursos, no podemos hacer el de 8 horas, así que devolvemos el de 1 y 2.')

console.log('8, [8, 2, 1, 4, 3]', learn(8, [8, 2, 1, 4, 3]), '// [3, 4] -> usamos el máximo tiempo disponible así que [3, 4] usa 7 horas y el [1, 2] sólo usaría 3 horas.')

console.log('4, [10, 14, 20]', learn(4, [10, 14, 20]), '// null -> no nos da tiempo a hacer dos cursos')

console.log('5, [5, 5, 5]', learn(5, [5, 5, 5]), '// null -> no nos da tiempo a hacer dos cursos')