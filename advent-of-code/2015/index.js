import * as first from './solves/1-solve.js'
import * as second from './solves/2-solve.js'
import * as third from './solves/3-solve.js'
import * as fourth from './solves/4-solve.js'
import * as fifth from './solves/5-solve.js'
import * as sixth from './solves/6-solve.js'
function printSolve(day, firstAnswer, secondAnswer) {
    console.log('Day', day, '===> First Answer:', firstAnswer, ' <===> Second Answer: ', secondAnswer)
}
/*
printSolve(1, first.firstPart(), first.secondPart())
printSolve(2, second.firstPart(), second.secondPart())
printSolve(3, third.firstPart(), third.secondPart()) 
printSolve(4, fourth.composePart(5), fourth.composePart(6))
printSolve(5, fifth.firstPart(), fifth.secondPart())
*/

printSolve(6, sixth.firstPart(), sixth.secondPart())



/* async function getPokemon() {
    const poke2 = await fetch('https://pokeapi.co/api/v2/pokemon/1')
    const poke = { a: poke2, b: poke2, c: poke2, d: poke2, e: poke2, f: poke2, g: poke2, h: poke2, i: poke2 }
    const t0 = performance.now()
    const cp1 = structuredClone(poke)
    const t1 = performance.now()
    const t2 = performance.now()
    const cp2 = JSON.parse(JSON.stringify(poke))
    const t3 = performance.now()

    console.log('1st time:', t1 - t0, '2sd time:', t3 - t2)
    console.log((t1 - t0) > (t3 - t2));
}

getPokemon()
 */
