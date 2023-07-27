/*import { errorMassage } from "./error.js"
import { handlerMainPin } from "./nav.js"

export const fetchData = async() => {
    let response;
    
    try {
        response = await fetch(`http://localhost:3030/pins`)
        response = await response.json()
    } catch (error) {
        errorMassage(response)
    }

    return handlerMainPin(response)
}
*/
