import { renderPinsFromData } from "./pins.js"
import { filter } from "./filters.js"

const pinMain = document.querySelector(".map__pin--main")
const map = document.querySelector(".map")

export const handlerMainPin = (response) => {
    pinMain.addEventListener("mousedown", 
    () => addEventListener("mousemove", someFunc))
    addEventListener("mouseup", () => removeEventListener("mousemove", someFunc))
    pinMain.addEventListener("mouseup", () => filtersHandler(response))
}

const someFunc = (e) => {
    const scrollOffset = document.documentElement.scrollTop
    const leftOffset = map.offsetLeft
    pinMain.style = `left:${e.clientX - leftOffset}px; top:${e.clientY + scrollOffset}px;`   
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