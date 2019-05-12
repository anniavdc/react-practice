import React from "react";
import "./App.css";

class CardColors extends React.Component {
  render() {
    const { itemColors } = this.props;
    const { itemName } = this.props;
    return (
      <React.Fragment>
        <h2>{itemName}</h2>
        <ul>
          {itemColors.map((color, colorIndex) => (
            <li
              className="card__color"
              key={colorIndex}
              style={{ backgroundColor: `#${color}` }}
            />
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default CardColors;
