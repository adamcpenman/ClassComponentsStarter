import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";
import Item from "./components/Item";
import ItemForm from "./components/ItemForm";
import data from "./data";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      groceries: data
    };
  }

  toggleItem = (event, itemId) => {
    this.setState({
      groceries: this.state.groceries.map(item => {
        if (item.id === itemId) {
          return {
            ...item,
            purchased: !item.purchased
          };
        } else {
          return item;
        }
      })
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Shopping List</h1>
          <ItemForm />
        </div>

        <div className="shopping-list">
          {this.state.groceries.map(item => (
            <Item
              key={item.id}
              item={item}
              onClick={e => this.toggleItem(e, item.id)}
            />
          ))}

          <button className="clear-btn">Clear Purchased</button>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
