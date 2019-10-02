import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";
import Item from "./components/Item";
import ItemForm from "./components/ItemForm";
import data from "./data";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Shopping List</h1>
          <ItemForm />
        </div>

        <div className="shopping-list">
          {data.map(item => (
            <Item key={item.id} item={item} />
          ))}

          <button className="clear-btn">Clear Purchased</button>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
