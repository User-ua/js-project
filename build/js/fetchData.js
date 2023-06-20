export const fetchData = async () => {   
    let response;
    
    try {
        response = await fetch(`http://localhost:3030/pins/asd`)
        response = await response.json()
    } catch (error) {
        alert("Ошибка HTTP: " + response.status); 
        console.log(error)
        // showErrorMessage()
    }

    return response

}

