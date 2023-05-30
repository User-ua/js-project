
const pinsList = []
const map = document.querySelector(".map")
const pitTemplateMain = document.querySelector(".map__pin--main")

export const renderPinsFromData = (pinsData) => {
    const pitTemplate = document.querySelector("#pin")

    pinsData.forEach((itemData, i) => {
        const pinElement = pitTemplate.content.cloneNode(true).querySelector("button")

        const pinLocation = pinElement.style = `left:${itemData.location.x}px; top:${itemData.location.y}px;`
        
        const img = pinElement.querySelector("img")
        img.src = itemData.avatar
        const image = img.src
        img.id =  Math.random()

        const titleData = itemData.title

        const priseData = itemData.prise

        const checkinData = itemData.checkin

        const typeData = itemData.type

        const featuresData = itemData.features

        const pinElementData = {img, image, featuresData, typeData, checkinData, priseData, titleData, pinLocation}
        pinsList.push(pinElementData)

        map.appendChild(pinElement)
    })
    
}
console.log(pinsList)
const buttonArray = []

export const renderPinsHandler = (e, pinsData) => {
    const cardTemplate = document.querySelector("#card")

    for (let index = 0; index < pinsList.length; index++) {
       
        if (e.target.id === pinsList[index].img.id) {

            const delElement = pinsList[index].img.closest("button")
            
            buttonArray.push(delElement)
            delElement.remove()

            const pinLocationMain = pitTemplateMain.style = pinsList[index].pinLocation

            const cardElement = cardTemplate.content.cloneNode(true)

            const img = cardElement.querySelector("img")
            img.src = pinsList[index].image

            const title = cardElement.querySelector(".popup__title")
            title.innerHTML = pinsList[index].titleData

            const prise = cardElement.querySelector(".popup__text--price")
            prise.innerHTML = pinsList[index].priseData

            const type = cardElement.querySelector(".popup__type")
            type.innerHTML = pinsList[index].typeData

            /*const features = cardElement.querySelector(".popup__features")
            const li = features.querySelectorAll("li")
            console.log(li.length)
            for (let n = 0; n < li.length; n++) {
                console.log(n)
                li[n].innerHTML = pinsList[index].featuresData
            }*/
            
            map.appendChild(cardElement)
        }
    }

    if (buttonArray.length > 1) {
        map.insertAdjacentElement('afterbegin', buttonArray[0]);
        buttonArray.shift()
    }
}

export const pinsHandler = (pinsData) => {
    map.addEventListener('click', renderPinsHandler)
}