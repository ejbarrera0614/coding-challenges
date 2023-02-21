import md5 from 'blueimp-md5/js/md5.min.js';

export function composePart(totalZeroes) {
    let initial = 0
    let hash = ''
    const builtZeroes = '0'.repeat(totalZeroes)
    while (hash.substring(0, totalZeroes) !== builtZeroes) {
        hash = md5(`bgvyzdsv${initial}`)
        initial += 1
    }
    return initial - 1
}