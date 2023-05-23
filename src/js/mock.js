import {getRandomFromArray, getRandomInt} from "./utils.js"
/*import getRandomFromArrey from "./utils.js"*/
const FEATURES = ["wifi", "dashwasher", "parking", "washer", "elevator", "conditioner"]
const TYPE = ["palace", "flat", "house", "bungalo"]
const CHECK_TIME = ["12:00", "13:00", "14:00"]  

export const generateMoks = () => {
    const mocks = [];

    const min = 0
    const max = 6
    const minType = 1
    const maxType = 4
    const maxCheckin = 3
    const amount = 8
    const minLocation = 130
    const maxLocation = 630    
    
    for (let i = 0; i < amount; i++) {
        mocks.push({
            author: 0 + i,
            avatar: `img/avatars/user0${i + 1}.png`,
            price: getRandomInt(0, 1000000) + "USD",
            rooms: getRandomInt(1, 4),
            guests: getRandomInt(minType, maxType),
            checkin: getRandomFromArray(CHECK_TIME), // вынести в ютилс
            checkout: getRandomFromArray(CHECK_TIME),
            features: [...FEATURES].splice(getRandomInt(min, max), getRandomInt(min, max)), // вынести в ютилс
            type: getRandomFromArray(TYPE), // вынести в ютилс
            description: "Welcome!",
            location: {
                x: getRandomInt(minLocation, maxLocation),
                y: getRandomInt(minLocation, maxLocation),
            }
        })  
    }

    return mocks
}
