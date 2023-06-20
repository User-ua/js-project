const pinMain = document.querySelector(".map__pin--main")
const map = document.querySelector(".map")
export const handleMainPin = () => {

    pinMain.addEventListener("mousedown", () => addEventListener("mousemove", someFunc))
    addEventListener("mouseup", () => removeEventListener("mousemove", someFunc))
    }
const someFunc = (e) => {
    const scrollOffset = document.documentElement.scrollTop
    const leftOffset = map.offsetLeft
    pinMain.style = `left:${e.clientX - leftOffset}px; top:${e.clientY + scrollOffset}px;`
}