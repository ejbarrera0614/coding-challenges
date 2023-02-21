import { puzzleInput } from '../resources/6-resource.js';

const formatPuzzleInput = puzzleInput.split('\n')

const SIZE_GRID = 1000
const gridLights = [...Array(SIZE_GRID)].map(() => [...Array(SIZE_GRID).fill(false)])
const gridLightsV2 = [...Array(SIZE_GRID)].map(() => [...Array(SIZE_GRID).fill({ toggle: false, brightness: 0 })])

function getInstructions(inputString) {
    const [action, startCoord, endCoord] = inputString.match(/^(turn on|turn off|toggle)|(\d+,\d+)+/g)
    return [action, startCoord.split(','), endCoord.split(',')]
}

function toggleLight({ action, x1, y1, x2, y2 }) {

    for (let i = Number(x1); i <= Number(x2); i++) {
        for (let j = Number(y1); j <= Number(y2); j++) {
            if (action === 'turn on') gridLights[i][j] = true
            else if (action === 'turn off') gridLights[i][j] = false
            else gridLights[i][j] = !gridLights[i][j]
        }

    }
}

function toggleLightV2({ action, x1, y1, x2, y2 }) {
    for (let i = Number(x1); i <= Number(x2); i++) {
        for (let j = Number(y1); j <= Number(y2); j++) {
            // TODO: Why is error when someone don't make destructuring here?
            const { ...light } = gridLightsV2[i][j]
            if (action === 'turn on') {
                light.toggle = true
                light.brightness += 1
            }
            else if (action === 'turn off') {
                light.toggle = false
                light.brightness = light.brightness === 0 ? 0 : light.brightness - 1
            }
            else {
                light.toggle = !light.toggle
                light.brightness += 2
            }
            gridLightsV2[i][j] = light
        }
    }
}

export function firstPart() {
    formatPuzzleInput.forEach(instructionStr => {
        const [action, [x1, y1], [x2, y2]] = getInstructions(instructionStr)
        toggleLight({ action, x1, y1, x2, y2 })
    })
    return gridLights.reduce((sumObj, currentRow) => {
        sumObj += currentRow.filter(light => light).length
        return sumObj
    }, 0)
}

export function secondPart() {
    formatPuzzleInput.forEach(instructionStr => {
        const [action, [x1, y1], [x2, y2]] = getInstructions(instructionStr)
        toggleLightV2({ action, x1, y1, x2, y2 })
    })
    return gridLightsV2.reduce((sumObj, currentRow) => {
        currentRow.forEach(light => {
            if (light.toggle === true) sumObj.totalOn += 1
            sumObj.totalBrightness += light.brightness
        })
        return sumObj
    }, { totalOn: 0, totalBrightness: 0 })
}