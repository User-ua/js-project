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
        img.id =  Math.random()
        pinsList.push(img)
        map.appendChild(pinElement)   
    })
}

const cardTemplate = document.querySelector("#card")

const renderCard = (pinsData) => (e) => {
    const article = map.querySelector("article")

    if (article) {
        article.remove() 
    }
     
    for (let index = 0; index < pinsList.length; index++) {
        
        if (e.target.id === pinsList[index].id) {
            
            const cardElement = cardTemplate.content.cloneNode(true)
            const cardArticle = cardElement.querySelector("article")

            const img = cardElement.querySelector("img")
            img.src = pinsData[index].avatar
            
            const title = cardElement.querySelector(".popup__title")
            title.textContent = pinsData[index].title

            const prise = cardElement.querySelector(".popup__text--price")
            prise.textContent = pinsData[index].prise

            const type = cardElement.querySelector(".popup__type")
            type.textContent = pinsData[index].type

            const cardfeatures = cardElement.querySelector(".popup__features")
            const features = pinsData[index].features

            const questionGuestsAndRooms = cardElement.querySelector(".popup__text--capacity")
            questionGuestsAndRooms.textContent = `${pinsData[index].rooms} комнаты для ${pinsData[index].guests} гостей`

            const time = cardElement.querySelector(".popup__text--time")
            time.textContent = `Заезд после ${pinsData[index].checkin}, выезд до ${pinsData[index].checkout}`

            cardfeatures.innerHTML = " "
            
            for (let n = 0; n < features.length; n++) {
                const classLi = (`popup__feature--${features[n]}`)
                const li = document.createElement("li")
                li.classList.add("popup__feature", classLi);
                cardfeatures.insertAdjacentElement(`afterend`, li);
            }
            
            const clouseButton = cardElement.querySelector("button")    
            clouseButton.addEventListener('click', removeHendler)    

            map.appendChild(cardElement)
            
            function removeHendler () {
                cardArticle.remove()
            }  
        }
    }
}   

export const pinsHandler = (pinsData, e) => {
    map.addEventListener('click', renderCard(pinsData, e))
}


