
let apiHost = "https://websitewithbot-server.herokuapp.com";

let getItems = () => {
    return fetch(apiHost + '/items').then(response => response.json()).catch(e => alert('Error in api folder.'));
}


let api = {
    getItems: getItems
};


export default api;