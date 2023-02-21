// https://adventjs.dev/challenges/02
export default function listGifts(letter) {
 const giftsCounts = letter.split(/( )/).reduce((giftsCounts, gift)=>{
  if(gift.length === 0 || /[( ) | _ ]/.test(gift)) return giftsCounts
  if(!giftsCounts[gift]) giftsCounts[gift] = 1
  else giftsCounts[gift] += 1
  return giftsCounts
 }, {})
 return giftsCounts
}
