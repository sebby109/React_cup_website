
let apiHost = "https://websitewithbot-server.herokuapp.com";

let getItems = () => {
    return fetch(apiHost + '/items').then(response => response.json()).catch(e => alert('Error in api folder.'));
    // .json() converts the json we received from our server back to javascript.
}

let getCart = () => {
    return fetch(apiHost + '/cart')
    .then(response => response.json())
    .catch(e => alert(e));
}

let addToCart = (i) => {
    return fetch(apiHost + '/addCart/' + i)
    .then(response => response.json())
    .catch(e => alert(e));
}

let api = {
    getItems: getItems,
    getCart: getCart,
    addToCart: addToCart
};


export default api;