import React, {Component} from 'react';

class ShopperItem extends Component {
    render() {
        return (
            <li>
                {this.props.name}
            </li>
        );
    }
}

export default ShopperItem;
