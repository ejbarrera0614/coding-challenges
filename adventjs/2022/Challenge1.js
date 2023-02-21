// https://adventjs.dev/challenges/01
export default function contarOvejas(ovejas) {
  // aquí tu magia
  const ovejasRojasNA = ovejas.filter(({color, name})=> {
    return (color === 'rojo' && /([Aa].*[Nn])|([Nn].*[Aa])/.test(name))
  })
  return ovejasRojasNA
}[]
