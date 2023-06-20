import { filter } from "./filters.js"
import { fetchData } from "./fetchData.js"
import { renderPinsFromData } from "./pins.js"
import { handleMainPin } from "./nav.js"

export const app = async () => {
    // const data = await fetchData()
    // filtersHandler(data) 
    handleMainPin()
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

