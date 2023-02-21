import { puzzleInput } from '../resources/3-resource.js';

const DIRECTIONS = {
    NORTH: '^',
    EAST: '>',
    SOUTH: 'v',
    WEST: '<',
}

const arrayDirections = puzzleInput.split('')
const santa = {
    original: {
        position: { x: 0, y: 0 },
    },
    robo: {
        position: { x: 0, y: 0 },
    },
    mapWalkMarker: new Map()
}
let countHousesVisited = 1

santa.mapWalkMarker.set('0,0', true)

function getNewPosition({ nextDirection, santaToMove }) {
    if (nextDirection === DIRECTIONS.NORTH) santaToMove.y += 1
    if (nextDirection === DIRECTIONS.EAST) santaToMove.x += 1
    if (nextDirection === DIRECTIONS.SOUTH) santaToMove.y -= 1
    if (nextDirection === DIRECTIONS.WEST) santaToMove.x -= 1

    return `${santaToMove.y},${santaToMove.x}`
}

function getNextSantaToMove({ index }) {
    const isNextOriginalSantaToMove = index % 2 === 0
    if (isNextOriginalSantaToMove) return santa.original

    return santa.robo
}

export function firstPart() {
    const { original, mapWalkMarker } = structuredClone(santa)
    countHousesVisited = 1
    arrayDirections.forEach(nextDirection => {
        const mapPosition = getNewPosition({ nextDirection, santaToMove: original.position })
        const isCurrentPositionVisited = mapWalkMarker.get(mapPosition)
        if (!isCurrentPositionVisited) {
            countHousesVisited += 1
            mapWalkMarker.set(mapPosition, true)
        }
    })

    return countHousesVisited
}

export function secondPart() {
    countHousesVisited = 1
    arrayDirections.forEach((nextDirection, index) => {
        const { position } = getNextSantaToMove({ index })
        const mapPosition = getNewPosition({ nextDirection, santaToMove: position })
        const isCurrentPositionVisited = santa.mapWalkMarker.get(mapPosition)
        if (!isCurrentPositionVisited) {
            countHousesVisited += 1
            santa.mapWalkMarker.set(mapPosition, true)
        }
    })

    return countHousesVisited
}