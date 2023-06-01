export const getRandomInt = (min, max) => {
    return Math.floor(min + Math.random() * max - min)
}

export const getRandomFromArray = (array) => {
    return array[getRandomInt(0, array.length)]
}

export const randomFeatures = (FEATURES, min, max) => {
    return [...FEATURES].splice(getRandomInt(min, max), getRandomInt(min, max))
}