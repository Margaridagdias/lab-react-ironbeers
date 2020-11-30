import React from 'react'
import { Link } from 'react-router-dom';
import Home from 'Home'



class RandomBeer extends React.Component {
    render() {
        return(
            <div>
            <div>
            <header>
            <Link to={`/`}>Home</Link>
            </header>
            </div>
            </div>
        )
}
}
export default RandomBeer;