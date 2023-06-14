import { filter } from "./filters.js"
import { getData } from "./mock.js"
import { renderPinsFromData } from "./pins.js"
import { handleMainPin } from "./nav.js"

export const app = async () => {
    let data = await getData()
    filtersHandler(data)

    // fetch
    // обработка ошибок
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

