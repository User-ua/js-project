const map = document.querySelector(".map")
const cardTemplate = document.querySelector("#card")

const renderCard = (pinsData) => {
    const article = map.querySelector("article")
   
    if (article) {
        article.remove()
    }

    const cardElement = cardTemplate.content.cloneNode(true)
    const cardArticle = cardElement.querySelector("article")
    
    const img = cardElement.querySelector("img")
    img.src = pinsData.avatar

    const photo = cardElement.querySelector(".popup__photo")
    photo.src = pinsData.photo
    
    const title = cardElement.querySelector(".popup__title")
    title.textContent = pinsData.title

    const price = cardElement.querySelector(".popup__text--price")
    price.textContent = pinsData.price

    const type = cardElement.querySelector(".popup__type")
    type.textContent = pinsData.type

    const cardfeatures = cardElement.querySelector(".popup__features")
    const features = pinsData.features

    const questionGuestsAndRooms = cardElement.querySelector(".popup__text--capacity")
    questionGuestsAndRooms.textContent = `${pinsData.rooms} комнаты для ${pinsData.guests} гостей`

    const time = cardElement.querySelector(".popup__text--time")
    time.textContent = `Заезд после ${pinsData.checkin}, выезд до ${pinsData.checkout}`

    cardfeatures.innerHTML = " "
    
    for (let n = 0; n < features.length; n++) {
        const classLi = (`popup__feature--${features[n]}`)
        const li = document.createElement("li")
        li.classList.add("popup__feature", classLi);
        cardfeatures.insertAdjacentElement(`afterend`, li);
    }
    
    const clouseButton = cardElement.querySelector("button")    
    clouseButton.addEventListener('click', () => {cardArticle.remove()
    })

    map.appendChild(cardElement)    
}

export const renderPinsFromData = (pinsData) => {
    const pitTemplate = document.querySelector("#pin")
    const buttonNode = document.querySelectorAll(".map__pin")
    for (let n = 0; n < buttonNode.length; n++){
        if (!(buttonNode[n].classList.contains('map__pin--main'))) {
            buttonNode[n].remove()
        } 
    }
    
    pinsData.forEach((itemData, i) => {
        const pinElement = pitTemplate.content.cloneNode(true).querySelector("button")
        pinElement.style = `left:${itemData.location.x}px; top:${itemData.location.y}px;`
        
        const img = pinElement.querySelector("img")
        img.src = itemData.avatar

        pinElement.addEventListener('click', () => {
            renderCard(itemData)
            }
        )
        
        map.appendChild(pinElement)      
    })
}