// https://adventofcode.com/2015/day/1
import { puzzleInput } from '../resources/1-resource.js';

// TODO: Maybe it can be a result with answer negative number when the answer is a positive number
export function firstPart() {
    const MATCH_LEFT_PARENTHESIS = /\(/g
    const totalRightParenthesis = puzzleInput.replace(MATCH_LEFT_PARENTHESIS, '').length
    const totalLeftParenthesis = puzzleInput.length - totalRightParenthesis
    const endedFloor = totalLeftParenthesis - totalRightParenthesis
    return endedFloor
}

export function secondPart() {
    let currentFloor = 0
    let positionToBasement = 0
    puzzleInput.split('').every((item, index) => {
        if (item === '(') currentFloor += 1
        else currentFloor -= 1
        if (currentFloor === -1) {
            positionToBasement = index + 1
            return false
        }
        return true
    })

    return positionToBasement
}

