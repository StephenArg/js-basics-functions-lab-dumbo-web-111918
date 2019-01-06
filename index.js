// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
    let result = 42 - distance
    return Math.abs(result)
}

function distanceFromHqInFeet(distance) {
    let result = distanceFromHqInBlocks(distance) * 264
    return result
}

function distanceTravelledInFeet(value, value2) {
    let result = Math.abs(value - value2) * 264
    return result
}

function calculatesFarePrice(start, destination) {
    let result = distanceTravelledInFeet(start, destination)
    if (result > 400 && result < 2000) {
        result -= 400
        result = result * .02
    } else if (result <= 400) {
        result = 0
    } else if (result > 2500) {
        result = "cannot travel that far"
    } else {
        result = 25
    }
    return result
}