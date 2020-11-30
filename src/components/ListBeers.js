import React from 'react'
import BeersService from '../api.js';
import { Link } from 'react-router-dom';
import Home from './Home.js';

class ListBeers extends React.Component {

    componentDidMount() {
        const beersService = new BeersService();
        beersService.getAll('https://ih-beers-api2.herokuapp.com/beers')
            .then((response) => {
                console.log(response);
                this.setState({
                    beers: response.data //we are always looking for the data response
                })
            })
    }

 render() {
        return(
            <div>
            <div>
            <header>
            <Link to={`/`}>Home</Link>
            </header>
            </div>
                {this.state.beers.map((beer, index) => {
                    return(
                        <div key={index}>
                          <Link to={`/beers/${beer.id}`}><img src={beer.image_url} alt={beer.name} /></Link>
                        </div>
          
                    )
                })}
            </div>
            
        )
    }
}

export default ListBeers;