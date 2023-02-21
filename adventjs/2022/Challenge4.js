// https://adventjs.dev/challenges/04
export default function createXmasTree(height) {
  // ¡Y no olvides también poner los turrones! 
  const width = 2 * height - 1;
  let totalStarts = 1;
  let tree = [ ...Array(height).keys() ].reduce((buldingTree, emptyValue, index) => {
    totalStarts += index > 0 ? 2 : 0 
    const totalUnderScore = (width - totalStarts) / 2
    const createUndeScore = '_'.repeat(totalUnderScore)
    const createStarts = '*'.repeat(totalStarts)
    return buldingTree += `${createUndeScore}${createStarts}${createUndeScore}\n`
  }, '');  
  const trunkUnderScore = '_'.repeat((width-1)/2)
  const trunk = `${trunkUnderScore}#${trunkUnderScore}` 
  tree += `${trunk}\n${trunk}`
  return tree
} 
