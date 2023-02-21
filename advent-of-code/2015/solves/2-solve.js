// https://adventofcode.com/2015/day/2
import { puzzleInput } from '../resources/2-resource.js';

const allSeparatedDimensions = puzzleInput.split('\n')

function getSidesSortShortShortest({ dimensions }) {
    return dimensions.split('x').map(value => Number(value)).sort((a, b) => a - b)
}

export function firstPart() {
    const totalPaperRequired = allSeparatedDimensions.reduce((sumTotal, current) => {
        const [side1, side2, side3] = getSidesSortShortShortest({ dimensions: current })
        const totalPaperForCurrentGift = (2 * side1 * side2) + (2 * side2 * side3) + (2 * side1 * side3) + (side1 * side2)
        sumTotal += totalPaperForCurrentGift
        return sumTotal
    }, 0)

    return totalPaperRequired
}

export function secondPart() {
    const totalRibbonRequired = allSeparatedDimensions.reduce((sumTotal, current) => {
        const [side1, side2, side3] = getSidesSortShortShortest({ dimensions: current })
        const totalRibbonCurrentDimension = (2 * side1) + (2 * side2) + (side1 * side2 * side3)
        sumTotal += totalRibbonCurrentDimension
        return sumTotal
    }, 0)

    return totalRibbonRequired
}

