
import { getData } from "./mock.js"
import { handlerMainPin } from "./nav.js"

//import { fetchData } from "./fetchData.js"

export const app = () => {
    const data = getData()
    handlerMainPin(data)
    
}