export const getRandomInt = (min, max) => {
    return Math.floor(min + Math.random() * max)
}

export const getRandomFromArray = (array) => {
    return array[getRandomInt(0, array.length)]
}

export const randomFeatures = (FEATURES, min, max) => {
    return [...FEATURES].splice(getRandomInt(min, max), getRandomInt(min, max))
}

export const getfeatur = (config, filteredPinsData) => {
    const array = []
    for (let i = 0; i < filteredPinsData.length; i++) {
        for (let j = 0; j < filteredPinsData[i].features.length; j++) {
            if (filteredPinsData[i].features[j] === config) {
                console.log(filteredPinsData[i])
                array.push(filteredPinsData[i])
            }
        }
    }
    filteredPinsData = array
    return filteredPinsData 
}

export const getSelectedValue = () => {
    const fieldset = document.querySelector(".map__features")
    const valueList = fieldset.querySelectorAll("input")
    const getValueList = []
    for (let n = 0; n < valueList.length; n++) {
        if (valueList[n].checked) {
            const getValue = valueList[n].value
            getValueList.push(getValue)     
        }
    }
    return (getValueList)   
}