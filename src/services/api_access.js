const api_root = "http://localhost:80/app";
export let playerId = null;

export function GetUsers(){
    return myFetch(api_root + "/");
}

export function Login(email, password){
    return myFetch(api_root + `/users`, { email: email, password: password })
        .then(x=> playerId = x.id);
}
function myFetch(url = ``, data = null) {
    let options = {
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, same-origin, *omit
        headers: {
            playerId: playerId
        }
    };
    if(data){
        options = { 
            ...options,
            method:  "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                ...options.headers,
                "Content-Type": "application/json; charset=utf-8",
                // "Content-Type": "application/x-www-form-urlencoded",
            },
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        };
      }
    return fetch(url, options)
    .then(response =>{
        return response.json()
    }); // parses response to JSON
}

