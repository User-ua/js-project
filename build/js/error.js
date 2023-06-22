export const errorMassage = (response) => {
    const errorTemplate = document.querySelector("#error")
    const map = document.querySelector(".map")
    
    const templateRander = errorTemplate.content.cloneNode(true)
    const errorDescription = templateRander.querySelector(".error__message--description")

    errorDescription.insertAdjacentText('afterbegin', "Ошибка HTTP: " + response.status)  
    map.appendChild(templateRander)
    
    console.log("Ошибка HTTP: " + response.status)
} 