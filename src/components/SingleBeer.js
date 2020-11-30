import React from 'react'
import { Link } from 'react-router-dom';
import BeersService from '../api.js';


class SingleBeer extends React.Component {
    state = {
        name:''
        
    }


    handleChange = (event) => {
        let { name, value, type } = event.target;
        this.setState({
            [name]: value
        })
    }

 handleFormSubmit = (event) => {
            event.preventDefault();
            const beersService = new BeersService();
            beersService.addBeer(this.state).then(() => {
                // Character at this state got added
                //Redirect the user to the characters list
                this.props.history.push('/beer')
            });
        }
    }


    render() {
        return (
            <div>
            <header>
            <Link to={`/`}>Home</Link>
            </header>
            


            <form onSubmit={this.handleFormSubmit}>

            <label>Name:</label>
            <input type="text" name="name" onChange={this.handleChange} value={this.state.name} />
            

            <label>Occupation:</label>
            <input type="text" name="occupation" onChange={this.handleChange} value={this.state.occupation}/>

            <label>Weapon:</label>
            <input type="text" name="weapon" onChange={this.handleChange} value={this.state.weapon}/>

            <label>Cartoon:</label>
            <input type="checkbox" name="checkbox"  onChange={this.handleChange} value={this.state.cartoon}/>

    <button>Create</button>
            </form>
        )
    }

export default SingleBeer;