import {getRandomInt} from "./utils.js"
/*import getRandomFromArrey from "./utils.js"*/

const mocks = [];
const generateMoks = () => {
    
    const min = 0
    const max = 6
    const minType = 1
    const maxType = 4
    const maxCheckin = 3
    const amount = 8
    const minLocation = 130
    const maxLocation = 630    
    
    for (let i = 0; i < amount; i++) {
        const FEATURES = ["wifi", "dashwasher", "parking", "washer", "elevator", "conditioner"]
        const TYPE = ["palace", "flat", "house", "bungalo"]
        const CHECKIN = ["12:00", "13:00", "14:00"]
        mocks.push({
            author: 0 + i,
            avatar: `img/avatars/user0${i + 1}.png`,
            price: "500USD",
            rooms: getRandomInt(minType, maxType),
            guests: getRandomInt(minType, maxType),
            checkin: CHECKIN[getRandomInt(min, maxCheckin)],
            checkout: CHECKIN[getRandomInt(min, maxCheckin)],
            features: FEATURES.splice(getRandomInt(min, max), getRandomInt(min, max)),
            type: TYPE[getRandomInt(min, maxType)],
            description: "Welcome!",
            location: {
                x: getRandomInt(minLocation, maxLocation),
                y: getRandomInt(minLocation, maxLocation),
            }
        })  
    }
}
generateMoks()
console.log(mocks)