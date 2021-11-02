import HOST from '../host';

class Request{
    constructor(method, body, isAuth, url){
        this.method = method;
        this.body = body;
        this.isAuth = isAuth;
        this.url = url;
    }

    async exec() {
        let myHeaders;
        let config;
        if( this.isAuth ){
            let auth = JSON.parse(sessionStorage.getItem('auth'));
            if( auth != null )
                myHeaders = { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + auth.token }
            else
                myHeaders = { 'Content-Type': 'application/json' }
        }
        else
            myHeaders = { 'Content-Type': 'application/json' }

        if( this.method === 'GET' )
            config = { method: this.method }
        else
            config = { method: this.method, headers: myHeaders, body: JSON.stringify( this.body ) }

        let response = await fetch(HOST + this.url, config);
        if( response.status === 401 )
            window.location.href = "/";
        return await response.json();
    }

    async upload(newName) {
        let format = new FormData();
        format.append("file", this.body);
        format.append("newName", newName);
        let configContrato = {
            method: this.method,
            body: format
        }
        let response = await fetch(HOST + this.url, configContrato);
        return await response.json();
    }
}

export default Request;