const pinMain = document.querySelector(".map__pin--main")
export const handleMainPin = () => {

    pinMain.addEventListener("mousedown", () => addEventListener("mousemove", someFunc))
    addEventListener("mouseup", () => removeEventListener("mousemove", someFunc))
    }
/*const someFunc = (e) => {
    pinMain.style = `left:${e.clientX}px; top:${e.clientY}px;`
}*/

const someFunc = (e) => {
    const map = document.querySelector(".map")
    const rect = map.getBoundingClientRect()
    pinMain.style = `left:${e.clientX - rect.left}px; top:${e.clientY - rect.top}px;`
 
}