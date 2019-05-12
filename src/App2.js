import React from "react";
import App2Item from './App2Item';

const items = [
  {
    name: "Cereales con chocolate",
    description: "Cereales rellenos de chocolate",
    quantity: 2,
    category: "Cereales",
    price: 5
  },
  {
    name: "Hamburguesa con queso",
    description: "Hamburguesa rica y saludable",
    quantity: 1,
    category: "Fast-food",
    price: 15
  },
  {
    name: "Agua mineral",
    description: "Agua de un charco del Himalaya",
    quantity: 2,
    category: "Bebida",
    price: 5
  }
];

class App2 extends React.Component {
    render() {
      return (
        <ul className="item-list">
        {items
        .filter(item=>(item.price<10))
        .map(item=>(
             <li>
             <App2Item
               name={item.name}
               description={item.description}
               quantity={item.quantity}
               category={item.category}
               price={item.price}
             />
           </li>
        ))}
        </ul>
      );
    }
  }
export default App2;
