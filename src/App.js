import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShopperList from "./components/ShopperList";
import ShopperItem from "./components/ShopperItem";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {items: [], isLoading: true};
    }

    componentDidMount() {
        const API_URL = process.env.REACT_APP_API_URL;

        const url = API_URL + '/shopper/list/all';
        fetch(url)
            .then(response => response.json())
            .then(shopperList => this.setState({items: shopperList, isLoading: false}));
    }

    render() {
        console.log(this.state.items)
        return (
            <div className="row">
                {this.state.items.map( sl =>
                    <div key={sl.id} className="col-4">
                        <ShopperList name={sl.name} description={sl.description} >
                            {sl.shopperElements.map(item =>
                                <ShopperItem key={item.id} name={item.name}/>
                            )}
                        </ShopperList>
                    </div>
                )}
            </div>
        );
    }
}

export default App;
