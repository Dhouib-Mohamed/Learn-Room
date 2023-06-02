const BASE_URL = "http://localhost:3000/"

const init = {
    mode: 'cors' as RequestMode, // no-cors, *cors, same-origin
    headers: {
        'Content-Type': 'application/json',
    }
}
const get = async (url) => {
    try {
        const response = await fetch(
            BASE_URL + url,
            {
                ...init,
                method: 'GET', // *GET, POST, PUT, DELETE, etc.
            }
        );
        const data = await response.json();
        console.log("data",data)
        if (data.message) {
         let errorMessage=data.message;
         console.log("error msg",errorMessage)
         return errorMessage;
        }
        return (data);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

const post = async (url, body) => {
    try {
        console.log("body",body)
        const response = await fetch(
            BASE_URL + url,
            {
                ...init,
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                body: JSON.stringify(body),
            }
        );
        console.log("response",response)
        const data = await response.json();
        console.log("data",data)
        if (data.message) {
         let errorMessage=data.message;
         console.log(errorMessage)
         return errorMessage;
        }
        return (data);
    } catch (error) {
        console.log("error in helper",error)
        console.error('Error:', error.message);
    }
}
const patch = async (url, body) => {
    try {
        const response = await fetch(
            BASE_URL + url,
            {
                ...init,
                method: 'PATCH', // *GET, POST, PUT, DELETE, etc.
                body: JSON.stringify(body),
            }
        );
        const data = await response.json();
        if (!response.ok){
            console.log("response",response);
        }
        return (data);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

const remove = async (url) => {
    try {
        const response = await fetch(
            BASE_URL + url,
            {
                ...init,
                method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
            }
        );
        const data = await response.json();
        return (data);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

export {get, post, patch, remove}