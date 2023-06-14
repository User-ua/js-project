import { PRICES, PRICE_LEVELS } from "./constants.js";
import { getfeatur, getSelectedValue } from "./utils.js"

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
                break
            case PRICE_LEVELS.HIGH: 
                filteredPinsData = filteredPinsData.filter((pin) => {
                    const n = Number(pin.price) 
                    const r = n > PRICES[config.price]
                    return r
                } )
                break
            case PRICE_LEVELS.MIDDLE:
                filteredPinsData = filteredPinsData.filter((pin) => Number(pin.price) > PRICES.low && Number(pin.price) < PRICES.high)
        }   
    }

    if (!(config.rooms === "any")) {
        console.log(pinsData.rooms)
        filteredPinsData = filteredPinsData.filter((pin) => Number(pin.rooms) === Number(config.rooms)) 
    }

    if (!(config.guests === "any")) {
        console.log(Number(pinsData.guests))
        filteredPinsData = filteredPinsData.filter((pin) => Number(pin.guests) === Number(config.guests))   
    }

    if (config.features) {
        console.log(config.features)
        console.log(filteredPinsData)
        for (let n = 0; n < config.features.length; n++) {
            console.log(n)
            if (config.features[n] === "wifi") {
                filteredPinsData = getfeatur(config.features[n], filteredPinsData)
            }

            if (config.features[n] === "dishwasher") {
                filteredPinsData = getfeatur(config.features[n], filteredPinsData)
            }

            if (config.features[n] === "parking") {
                filteredPinsData = getfeatur(config.features[n], filteredPinsData)
            }

            if (config.features[n] === "washer") {
                filteredPinsData = getfeatur(config.features[n], filteredPinsData)
            }

            if (config.features[n] === "elevator") {
                filteredPinsData = getfeatur(config.features[n], filteredPinsData)
            }

            if (config.features[n] === "conditioner") {
                filteredPinsData = getfeatur(config.features[n], filteredPinsData)
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
        features: getSelectedValue()
    }
}

const getValueFromNode = (selector) => {
    return document.querySelector(selector)?.value
}


