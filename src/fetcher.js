const fetcher = (url, callBack=console.log, params={}) => {
    const method =  params.method ? params.method : "GET"
    const headers = params.headers ? params.headers : {
        "content-type": "application/json",
        "accept": "application/json"
    }
    const body = params.body ? JSON.stringify(params.body) : null 

    fetch(url, {method: method, headers: headers, body: body})
    .then(response => response.json())
    .then(data => callBack(data))
    .catch(error => console.log(error))     
}

export default fetcher