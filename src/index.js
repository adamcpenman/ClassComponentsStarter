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
    event.preventDefault();
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

  clearPurchased = event => {
    event.preventDefault();
    this.setState({
      //filter out all groceries that are purchased
      groceries: this.state.groceries.filter(item => {
        return !item.purchased; //return false ===false
      })
    });
  };

  addItem = (event, itemName) => {
    const newItem = {
      id: Date.now(),
      name: itemName,
      purchased: false
    };

    this.setState({
      groceries: [...this.state.groceries, newItem]
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Shopping List</h1>
          <ItemForm addItem={this.addItem} />
        </div>

        <div className="shopping-list">
          {this.state.groceries.map(item => (
            <Item
              key={item.id}
              item={item}
              onClick={e => this.toggleItem(e, item.id)}
            />
          ))}

          <button className="clear-btn" onClick={this.clearPurchased}>
            Clear Purchased
          </button>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
