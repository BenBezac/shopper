import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/all.js';
import ShopperList from "./components/ShopperList";
import ShopperItem from "./components/ShopperItem";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoading: true
        };
    }

    fetchShopperLists = () => {
        const url = this.props.apiUrl + '/shopper/list/all';
        fetch(url)
            .then(response => response.json())
            .then(shopperList => this.setState({items: shopperList, isLoading: false}));

    }

    componentDidMount() {
        this.fetchShopperLists();
    }

    updateShopperItemState = (id, state) => {
        fetch(`${this.props.apiUrl}/shopper/element/update/${id}/state/${state}`, {method: 'PUT'})
            .then( r =>
                this.fetchShopperLists()
            );
    }

    deleteShopperItem = (id) => {
        fetch(this.props.apiUrl + '/shopper/element/delete/' + id, {method: 'DELETE'})
            .then( r =>
                this.fetchShopperLists()
            );
    }

    render() {
        console.log(this.state.items)
        return (
            <div className="row">
                {this.state.items.map( sl =>
                    <div key={sl.id} className="col-4">
                        <ShopperList name={sl.name} description={sl.description} >
                            {sl.shopperElements.map(item =>
                                <ShopperItem
                                    key={item.id}
                                    id={item.id}
                                    name={item.name}
                                    isChecked={item.checked}
                                    isEditMode={false}
                                    updateShopperItemState={this.updateShopperItemState}
                                    deleteShopperItem={this.deleteShopperItem}
                                />
                            )}
                        </ShopperList>
                    </div>
                )}
            </div>
        );
    }
}

export default App;
