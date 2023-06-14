import { filter } from "./filters.js"
import { generateMoks } from "./mock.js"
import { renderPinsFromData } from "./pins.js"
import { handleMainPin } from "./nav.js"

export const app = () => {
    let data = generateMoks()
    filtersHandler(data)
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

