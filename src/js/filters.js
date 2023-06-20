import { PRICES, PRICE_LEVELS } from "./constants.js"
import { getFeature, getSelectedValue, getValueFromNode } from "./utils.js"

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
        filteredPinsData = filteredPinsData.filter((pin) => Number(pin.rooms) === Number(config.rooms)) 
    }

    if (!(config.guests === "any")) {
        filteredPinsData = filteredPinsData.filter((pin) => Number(pin.guests) === Number(config.guests))   
    }

    if (config.features) {
        for (let n = 0; n < config.features.length; n++) {
            if (config.features[n] === "wifi") {
                filteredPinsData = getFeature(config.features[n], filteredPinsData)
            }

            if (config.features[n] === "dishwasher") {
                filteredPinsData = getFeature(config.features[n], filteredPinsData)
            }

            if (config.features[n] === "parking") {
                filteredPinsData = getFeature(config.features[n], filteredPinsData)
            }

            if (config.features[n] === "washer") {
                filteredPinsData = getFeature(config.features[n], filteredPinsData)
            }

            if (config.features[n] === "elevator") {
                filteredPinsData = getFeature(config.features[n], filteredPinsData)
            }

            if (config.features[n] === "conditioner") {
                filteredPinsData = getFeature(config.features[n], filteredPinsData)
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