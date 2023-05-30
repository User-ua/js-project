import {getRandomInt, getRandomFromArray, randomFeatures} from "./utils.js"
/*import getRandomFromArrey from "./utils.js"*/

const mocks = []
const FEATURES = ["wifi", "dashwasher", "parking", "washer", "elevator", "conditioner"]
const TYPE = ["palace", "flat", "house", "bungalo"]
const CHECKTIME = ["12:00", "13:00", "14:00"]
const PRISE = ["500 USD", "800 USD", "1000 USD"]

export const generateMoks = () => {
    
    const min = 0
    const max = 6
    const minType = 1
    const maxType = 3
    const amount = 8
    const minLocation = 130
    const maxLocation = 630    
    
    for (let i = 0; i < amount; i++) {
        
        mocks.push({
            author: 0 + i,
            avatar: `img/avatars/user0${i + 1}.png`,
            title: "Apartment with all amenities",
            prise: getRandomFromArray(PRISE),
            rooms: getRandomInt(minType, maxType),
            guests: getRandomInt(minType, maxType),
            checkin: getRandomFromArray(CHECKTIME),
            checkout: getRandomFromArray(CHECKTIME),
            features: randomFeatures(FEATURES, min, max),
            type: TYPE[getRandomInt(min, TYPE.length)],
            description: "Welcome!",
            location: {
                x: getRandomInt(minLocation, maxLocation),
                y: getRandomInt(minLocation, maxLocation),
            }
        })  
    }
    return mocks
}

