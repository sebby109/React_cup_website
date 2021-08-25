
let apiHost = "https://websitewithbot-server.herokuapp.com";

let getItems = () => {
    return fetch(apiHost + '/items').then(response => response.json()).catch(e => alert('Error in api folder.'));
    // .json() converts the json we received from our server back to javascript.
}

let getCart = () => {
    return fetch(apiHost + '/cart')
    .then(response => response.json())
    .catch(e => alert('get cart error'));
}

let addToCart = (i) => {
    return fetch(apiHost + '/addCart', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(i)
    });
}

let getTempCart = () => {
    return fetch(apiHost + '/getTemp')
    .then(response => response.json())
    .catch(e => console.log(e));
}

let addCartItems = (items) => {
    return fetch(apiHost + '/addTemp', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(items)
    });
}

let getItemsFromDb = (selected) => {
    return fetch(apiHost + '/selection/' + selected)
    .then(response => response.json())
    .catch(e => console.log(e));
}

let api = {
    getItems: getItems,
    getCart: getCart,
    getTempCart: getTempCart,
    addToCart: addToCart,
    addCartItems: addCartItems,
    getItemsFromDb: getItemsFromDb
};


export default api;