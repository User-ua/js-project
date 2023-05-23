export const renderPinsFromData = (pinsData) => {
    const pitTemplate = document.querySelector('#pin')
    const map = document.querySelector('.map')

    pinsData.forEach((itemData, i) => {
        const pinElement = pitTemplate.content.cloneNode(true).querySelector('button')

        pinElement.style = `left: ${itemData.location.x}px; top: ${itemData.location.y}px;`
        
        const img = pinElement.querySelector('img')
        img.src = itemData.avatar

        map.appendChild(pinElement)
    })
}
