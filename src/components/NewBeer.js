import React from 'react'
import { Link } from 'react-router-dom';

class Newbeer extends React.Component {
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
export default Newbeer;