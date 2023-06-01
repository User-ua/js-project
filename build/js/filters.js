export const filter = (pinsData) => {
    const config = getFilterConfig()
    let filteredPinsData = pinsData;
    
    if (!(config.type === "any")) {
        filteredPinsData = pinsData.filter((pin) => pin.type === config.type)
    }
    
    return filteredPinsData 
}

const getFilterConfig = () => {

    return {
        type: getValueFromNode('#housingtype'),
        price: true
    }
}

const getValueFromNode = (selector) => {
    return document.querySelector(selector)?.value
}
