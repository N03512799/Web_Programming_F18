const api_root = "http://localhost:80/game";

export function GetState(){
    return fetch(api_root + "/")
    .then(function(response) {
        return response.json();
      })
}

/*export function FlipPicture(){
    return postData(api_root + "/picture", {})
    .then(function(response) {
        return response.json();
      })
}
function postData(url = ``, data = null) {
    return fetch(url, {
        method: "POST",
        mode: "no-cors",
        cache: "no cache",
        credentials: "same-origin",
        headers: {

        },
        body: JSON.stringify(data)


    })
}
*/

