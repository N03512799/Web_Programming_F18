const api_root = "http://localhost:4848/api";
export let email = null;
export let password = null;
export let f_name = null;
export let l_name = null;
export let gender = null;

export function GetState(){
    return myFetch(api_root + "/");
}

export function login(f_name, l_name, email, password, gender){
    return myFetch(api_root + `/users`, {f_name, l_name, email, password, gender})
}
function myFetch(url = ``, data = null) {
    let options = {
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, same-origin, *omit
        headers: {
            email: email,
            password: password,
            f_name: f_name,
            l_name: l_name,
            gender: gender
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

