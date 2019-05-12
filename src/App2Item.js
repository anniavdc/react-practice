import React from "react";
import PropTypes from 'prop-types';

class App2Item extends React.Component {
    render() {
      return (
        <div className="item">
          <h5 className="quantity">{this.props.quantity}</h5>
          <div>
            <h5>{this.props.name}</h5>
            <h6 className="text-muted">{this.props.description}</h6>
          </div>
          <div className="badge badge-info">{this.props.category}</div>
          <h5 className="price">{this.props.price}€</h5>
        </div>
      );
    }
  }

App2Item.protTypes={
    quantity: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
    price: PropTypes.number,
}
export default App2Item;
