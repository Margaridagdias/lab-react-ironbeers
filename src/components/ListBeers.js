import React from 'react';
import { Link } from 'react-router-dom';
import BeerService from '../utils/api';

class ListBeers extends React.Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    const beerService = new BeerService();
    beerService.getAll().then((response) => {
      console.log(response);
      this.setState({
        beers: response.data,
      });
    });
  }

  render() {
    return (
      <div> 
      <header>
            <Link to={`/`}>Home</Link>
            </header>
        {this.state.beers.map((beers, index) => {
          return (
            <div key={index}>
              <Link to={`/beers/${beers.id}`}>
                <ul>
                  <li>{beers.image}</li>
                  <li>{beers.name}</li>
                  <li>{beers.tagline}</li>
                  <li>Created by:{beers.contributed_by}</li>
                </ul>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}
export default ListBeers;