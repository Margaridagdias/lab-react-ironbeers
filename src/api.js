import axios from 'axios'

class BeersService {
    constructor() {
        let service = axios.create({
            baseURL: "https://ih-beers-api2.herokuapp.com/beers"
        });
        this.service = service
    }
    getAll() { 
        
        return this.service.get('/beers')
    }
    getBeers(id) { 
        
        return this.service.get(`/beers/${id}`)
    }

    getRandomBeers() { 
        
        return this.service.get(`/beers/random`)
    }

    addBeers(beer) { 
       
        return this.service.post('/beers/new', beer);
    }
    
}

export default BeersService;