import { PRICES, PRICE_LEVELS } from "./constants.js";

export const filter = (pinsData) => {
    const config = getFilterConfig()
    let filteredPinsData = pinsData; 
    if (!(config.type === "any")) {
        filteredPinsData = filteredPinsData.filter((pin) => pin.type === config.type)   
    }

    if (!(config.price === "any")) {
        switch(config.price) {
            case PRICE_LEVELS.LOW:
                filteredPinsData = filteredPinsData.filter((pin) => Number(pin.price) < PRICES[config.price])
            case PRICE_LEVELS.HIGH: 
                filteredPinsData = filteredPinsData.filter((pin) => {
                    const n = Number(pin.price) 
                    const r = n > PRICES[config.price]
                    return r
                } )
            case PRICE_LEVELS.MIDDLE:
                filteredPinsData = filteredPinsData.filter((pin) => Number(pin.price) > PRICES.low && Number(pin.price) < PRICES.high)
        }   
        console.log(filteredPinsData, config, pinsData);
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
                const getParking = () => {
                    const array = []
                    for (let i = 0; i < filteredPinsData.length; i++) {
                        for (let j = 0; j < filteredPinsData[i].features.length; j++) {
                            if (filteredPinsData[i].features[j] === "parking") {
                                console.log(filteredPinsData[i])
                                array.push(filteredPinsData[i])
                            }
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
        features: getValueWhenSelected()
    }
}

const getValueFromNode = (selector) => {
    return document.querySelector(selector)?.value
}

const getValueWhenSelected = () => {
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


