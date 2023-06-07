export const filter = (pinsData) => {
    const config = getFilterConfig()
    let filteredPinsData = pinsData; 
    if (!(config.type === "any")) {
        filteredPinsData = filteredPinsData.filter((pin) => pin.type === config.type)   
    }

    if (!(config.price === "any")) {
        if (config.price === String("low")) {
            config.price = 10000 
            filteredPinsData = filteredPinsData.filter((pin) => Number(pin.price) < config.price)   
        }
        if (config.price === "high") {
            config.price = 50000
            filteredPinsData = filteredPinsData.filter((pin) => Number(pin.price) > config.price )
        }
        if (config.price === "middle") {
            let a = 10000
            let b = 50000
            filteredPinsData = filteredPinsData.filter((pin) => Number(pin.price) > a)
            filteredPinsData = filteredPinsData.filter((pin) => Number(pin.price) < b)
        }
        
        console.log(filteredPinsData)
    }
    if (!(config.rooms === "any")) {
        filteredPinsData = filteredPinsData.filter((pin) => pin.rooms === config.rooms)   
    }

    if (!(config.guests === "any")) {
        filteredPinsData = filteredPinsData.filter((pin) => Number(pin.guests) === Number(config.guests))   
    }

    if (config.features) {
        console.log(config.features)
        for (let n = 0; n < config.features.length; n++) {
            console.log(n)
            if (config.features[n] === "wifi") {
                filteredPinsData = filteredPinsData.filter((pin) => pin.features[n] === config.features[n])
                console.log(config.features)
            }

            if (config.features[n] === "dishwasher") {
                filteredPinsData = filteredPinsData.filter((pin) => pin.features[n] === config.features[n])
            }

            if (config.features[n] === "parking") {
                function getParking() {const array = []
                    for (let i = 0; i < filteredPinsData.length; i++) {
                        for (let k = 0; k < filteredPinsData[i].features.length; k++)
                        if (filteredPinsData[i].features[k] === "parking") {
                            console.log(filteredPinsData[i])
                            array.push(filteredPinsData[i])
                        }  
                    }
                    filteredPinsData = array
                    return filteredPinsData  
                }
                getParking()
            }

            if (config.features[n] === "washer") {
                filteredPinsData = filteredPinsData.filter((pin) => pin.features[n] === config.features[n])
            }

            if (config.features[n] === "elevator") {
                filteredPinsData = filteredPinsData.filter((pin) => pin.features[n] === config.features[n])
            }

            if (config.features[n] === "conditioner") {
                filteredPinsData = filteredPinsData.filter((pin) => pin.features[n] === config.features[n])
            }
        }
    }
    return filteredPinsData 
}

const getFilterConfig = () => {

    return {
        type: getValueFromNode('#housingtype'),
        price: getValueFromNode('#housing-price'),
        rooms: getValueFromNode('#housing-rooms'),
        guests: getValueFromNode('#housing-guests'),
        features: getValueWhanSelected()
    }
}

const getValueFromNode = (selector) => {
    return document.querySelector(selector)?.value
}

const getValueWhanSelected = () => {
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


