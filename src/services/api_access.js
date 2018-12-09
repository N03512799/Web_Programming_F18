import { runInNewContext } from "vm";

const api_root = "http://localhost:80/app";
export let playerId = -1;

export function GetState(){
    return myFetch(api_root + "/");
}

export function Login(email, password){
    return myFetch(api_root + `/users`, { email: email, password: password })
        .then(x=> playerId = x.id)
}

export function createUser(f_name, l_name, gender, email, password){
    return myFetch(api_root + `/users/new`, {f_name: f_name, l_name: l_name, gender: gender, email: email, password: password})
        .then(x=> playerId = x.id)
}

export function getUser(id){
    const user = myFetch(api_root + `/users/find/${id}`)
   return user;
      
//    return {id: userId};
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

