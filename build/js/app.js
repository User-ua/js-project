import { filter } from "./filters.js"
import { getData } from "./mock.js"
import { renderPinsFromData } from "./pins.js"
import { handleMainPin } from "./nav.js"

export const app = async () => {
    let data = await getData()
    filtersHandler(data)

    const response = await fetch(`http://localhost:3030/pins`)

    if (response.ok) {  
        const content = await response.json()
        console.log(content) } 
        else { alert("Ошибка HTTP: " + response.status); 
    }
}

const filtersHandler = (data) => {
    const form = document.querySelector('form');
    form.addEventListener('change', () => {
        const filtered = filter(data)
        renderPinsFromData(filtered)
    })
    const filtered = filter(data)
    renderPinsFromData(filtered)  
}

handleMainPin()
