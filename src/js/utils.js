export const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * max - min) + min
}

export const getRandomFromArray = (array) => {
    return array[getRandomInt(0, array.length)]
}

/*
export const getRandomTypeInt = () => {
    for (let n = 0; n < getRandomInt(min, max); n++) {
        randomFeatures.push(FEATURES[getRandomInt(min, max)])
    }
}*/
