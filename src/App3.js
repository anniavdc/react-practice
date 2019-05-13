import React from "react";
import "./App.css";
import Madrid from './images/madrid.jpg';
import Sydney from './images/sydney.jpg';
import Praga from './images/praga.jpg';
import Boston from './images/boston.jpg';
import Tokio from './images/tokio.jpg';

const images={
    Madrid: Madrid,
    Sydney: Sydney,
    Praga: Praga,
    Boston: Boston,
    Tokio: Tokio,
}
class App3 extends React.Component {
  constructor(props) {
    super();
    this.state = {
      image: Madrid
    };
    this.handlerClick = this.handlerClick.bind(this)
  }
  handlerClick(event){
    const inputValue = event.target.value;
    this.setState({
        image: images[inputValue]
    })
  }
  render() { 
    return (
      <React.Fragment>
        <select name="city" id="city" onClick={this.handlerClick}>
          <option value="Madrid">Madrid</option>
          <option value="Sydney">Sydney</option>
          <option value="Praga">Praga</option>
          <option value="Boston">Boston</option>
          <option value="Tokio">Tokio</option>
        </select>
        <img src={this.state.image} alt="city" />
      </React.Fragment>
    );
  }
}

export default App3;
