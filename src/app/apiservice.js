import axios from "axios"

const httpCLient = axios.create({
    baseURL: 'http://localhost:8080'
})

class ApiService {

    constructor(apiurl) {
        this.apiurl = apiurl;
    }

    post(url, objeto){
        return httpCLient.post(url, objeto);
    }

    put(url, objeto){
        return httpCLient.put(url, objeto);
    }

    delete(url){
        return httpCLient.delete(url);
    }

    get(url){
        return httpCLient.get(url);
    }

}
export default ApiService