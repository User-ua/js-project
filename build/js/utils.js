export const getRandomInt = (min, max) => {
    return Math.floor(min + Math.random() * max)
}

export const getRandomFromArray = (array) => {
    return array[getRandomInt(0, array.length)]
}

export const randomFeatures = (FEATURES, min, max) => {
    return [...FEATURES].splice(getRandomInt(min, max), getRandomInt(min, max))
}

export const getFeature = (config, filteredPinsData) => {
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
    const valuesList = fieldset.querySelectorAll("input")
    const getValueList = Array.from(valuesList).filter((item) => item.checked).map((item) => item.value)
    // for (let n = 0; n < valuesList.length; n++) {
    //     if (valuesList[n].checked) {
    //         const getValue = valuesList[n].value
    //         getValueList.push(getValue)     
    //     }
    // }
    return (getValueList)   
}
