
let apiHost = "https://websitewithbot-server.herokuapp.com";

let getItems = () => {
    return fetch(apiHost + '/items').then(response => response.json()).catch(e => alert('Error in api folder.'));
    // .json() converts the json we received from our server back to javascript.
}

let addItem = (item) => {
    return fetch(apiHost + '/item' , {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    });
}

let api = {
    getItems: getItems,
    addItem: addItem
};


export default api;