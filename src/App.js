import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {items: [], isLoading: true};
    }

    componentDidMount() {
        const API_URL = process.env.REACT_APP_API_URL;

        const url = API_URL + '/shopperElements';
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({items: data._embedded.shopperElements, isLoading: false}));
    }

    render() {
        console.log(this.state.items)
        return (
            <div>
                {this.state.items.map( (shopperElement, index) =>
                    <div key={index} className="row">
                        <div className="col-12">
                            <label>Nom: </label> {shopperElement.name}
                        </div>
                        <div className="col-12">
                            <label>Description: </label> {shopperElement.description}
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default App;
