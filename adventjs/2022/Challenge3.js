// https://adventjs.dev/challenges/03
export default function isValid(letter) {
  // ¡No dejes que el Grinch gane!
  let isValid = true
  if (/( [\[|\{|\]|\}] )/.test(letter))isValid = false
  else { 
    const gifts = letter.split(' ')
    for (let i = 0; i < gifts.length; i++) {
      const gift = gifts[i]
      if (!(/(^\([\w\u00f1\u00d1À-ÿ]+\)$|^[\w\u00f1\u00d1]+)/.test(gift))) {
        isValid = false
        break
      }
    }
  }

  /* const result = letter.split(' ').some((regalo)=>{
    console.log(regalo, regalo.trim().length > 0,  /(^\(.+\)$|^\w+)/.test(regalo),
      regalo.trim().length > 0 &&   /!(^\(.+\)$|^\w+)/.test(regalo))
    if(
      regalo.trim().length > 0 &&
      /!(^\(.+\)$|^\w+)/.test(regalo)
      ) return false 
  }) 
   */
  return isValid
}

