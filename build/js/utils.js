export const getRandomInt = (min, max) => {
    return Math.floor(min + Math.random() * max - min + 1)
}

export const getRandomFromArray = (array) => {
    return array[getRandomInt(0, array.length - 1)]
}

export const randomFeatures = (FEATURES, min, max) => {
    return [...FEATURES].splice(getRandomInt(min, max), getRandomInt(min, max))
}
