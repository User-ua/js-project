import { getRandomInt, getRandomFromArray, randomFeatures } from "./utils.js"
import { TYPE, CHECKTIME, PRISE, FEATURES, min, max, minType, maxType, amount, minLocation, maxLocation} from "./constants.js";


export const getData = () => {  
    const mocks = [] 
    for (let i = 0; i < amount; i++) {

        mocks.push({
            author: 0 + i,
            photo: `img/photo/photo0${i + 1}.jpg`,
            avatar: `img/avatars/user0${i + 1}.png`,
            title: "Apartment with all amenities",
            price: getRandomFromArray(PRISE),
            rooms: getRandomInt(minType, maxType),
            guests: getRandomInt(minType, maxType),
            checkin: getRandomFromArray(CHECKTIME),
            checkout: getRandomFromArray(CHECKTIME),
            features: randomFeatures(FEATURES, min, max),
            type: TYPE[getRandomInt(min, TYPE.length - 1)],
            description: "Welcome!",
            location: {
                x: getRandomInt(minLocation, maxLocation),
                y: getRandomInt(minLocation, maxLocation),
            }
        })  
    }
    //return Promise.resolve(mocks)
    return mocks
}

