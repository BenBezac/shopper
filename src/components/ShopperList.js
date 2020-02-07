import React, {Component} from 'react';

class ShopperList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            elements: []
        }
    }

    async loadElements() {

    }

    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <p>{this.props.description}</p>
                {/*<button type="button" className="btn btn-primary" onClick={this.loadElements()}>Afficher les éléments de la liste</button>*/}
                <ul>
                    {this.props.children}
                </ul>
            </div>
        );
    }
}

export default ShopperList;
