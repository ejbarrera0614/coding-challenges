import { puzzleInput } from '../resources/5-resource.js';

const allSeparatedString = puzzleInput.split('\n')

const conditionsNiceString = ({ str, strSplitted }) => ({
    firstPart: [
        function isItLeastThreeVowels() {
            const regex = /a|e|i|o|u/g
            const arrVowels = str.match(regex)
            return arrVowels?.length > 2
        },
        function isItLeasTwiceVowelsInRow() {
            return strSplitted.some((char, index) => char === str.at(index + 1))
        },
        function isItWithoutCertainStrings() {
            const regex = /(ab|cd|pq|xy)/g
            const isMatched = regex.test(str)
            return !isMatched
        },
    ],
    secondPart: [
        function isItContainTwicePair() {
            const isItContain = strSplitted.some((char, index) => str.slice(index + 2).includes(`${char}${str.at(index + 1)}`))
            return isItContain
        },
        function isItRepeatLetterBetween() {
            const isItContain = strSplitted.some((char, index) => char === str.at(index + 2))
            return isItContain
        },
    ]
})

export function firstPart() {
    const totalStrNice = allSeparatedString.reduce((count, currentString) => {
        count += conditionsNiceString({ str: currentString, strSplitted: currentString.split('') }).firstPart.every(fn => fn())
        return count
    }, 0)

    return totalStrNice
}

export function secondPart() {
    const totalStrNice = allSeparatedString.reduce((count, currentString) => {
        count += conditionsNiceString({ str: currentString, strSplitted: currentString.split('') }).secondPart.every(fn => fn())
        return count
    }, 0)

    return totalStrNice
}