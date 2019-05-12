import React from 'react';
import "./App.css";
import CardColors from './CardColors';

class Card extends React.Component{
    render(){
      const {cardData} = this.props;
        return(
            <div className="card">
            {cardData.map((item, index) => (
              <li className="card__name" key={index}>
                <CardColors itemName={item.name} itemColors={item.colors}/>
              </li>
            ))}
          </div>
        )
    }
}

export default Card;