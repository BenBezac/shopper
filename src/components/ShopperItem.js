import React, {Component} from 'react';

import './ShopperItem.css';

class ShopperItem extends Component {

    render() {
        const checkButton = (
            <button type="button" className="btn btn-primary float-right" onClick={() => this.props.updateShopperItemState(this.props.id, true)}>
                <span className="fas fa-check"></span>
            </button>
        )

        const uncheckButton = (
            <button type="button" className="btn btn-primary float-right" onClick={() => this.props.updateShopperItemState(this.props.id, false)}>
                <span className="fas fa-times"></span>
            </button>
        )

        return (
            <div className={ "shopper-item list-group-item " + (this.props.isChecked ? "checked" : "")}>
                <span>{this.props.name}</span>
                <button type="button" className="btn btn-danger float-right" onClick={() => this.props.deleteShopperItem(this.props.id)}>
                    <span className="fas fa-trash"></span>
                </button>
                { this.props.isChecked ? uncheckButton : checkButton }
            </div>
        );
    }
}

export default ShopperItem;
