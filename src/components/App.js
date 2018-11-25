import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base";
import Footer from "./Footer";

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  static propTypes = {
    match: PropTypes.object
  };

  componentDidMount() {
    const { params } = this.props.match;
    // Reinstate LocalStoreage first for orders
    const localStorageRef = localStorage.getItem(params.storeId);
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: "fishes"
    });
  }

  componentDidUpdate() {
    localStorage.setItem(
      this.props.match.params.storeId,
      JSON.stringify(this.state.order)
    );
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addFish = fish => {
    const fishes = { ...this.state.fishes };

    fishes[`fish${Date.now()}`] = fish;

    this.setState({
      fishes
    });
  };

  updateFish = (key, updateFish) => {
    const fishes = { ...this.state.fishes };
    fishes[key] = updateFish;
    this.setState({ fishes });
  };

  deleteFish = key => {
    const fishes = { ...this.state.fishes };
    fishes[key] = null;
    this.setState({ fishes });
  };

  loadSampleFishes = () => {
    this.setState({
      fishes: sampleFishes
    });
  };

  addToOrder = key => {
    // 1. make a copy of current state
    const order = { ...this.state.order };
    // 2. Either Add Item to order or Update our order
    order[key] = order[key] + 1 || 1;
    // 3. Update state using setState
    this.setState({ order });
  };

  removeFromOrder = key => {
    // 1. make a copy of current state
    const order = { ...this.state.order };
    // 2. Remove that item from orded
    delete order[key];
    // 3. Update State
    this.setState({ order });
  };

  render() {
    return (
      <div>
        <div className="catch-of-the-day">
          <div className="menu">
            <Header tagline="HRR is awesome!" />
            <ul className="fishes">
              {Object.keys(this.state.fishes).map(key => (
                <Fish
                  key={key}
                  index={key}
                  details={this.state.fishes[key]}
                  addToOrder={this.addToOrder}
                />
              ))}
            </ul>
          </div>
          <Order
            fishes={this.state.fishes}
            order={this.state.order}
            removeFromOrder={this.removeFromOrder}
          />
          <Inventory
            addFish={this.addFish}
            updateFish={this.updateFish}
            deleteFish={this.deleteFish}
            loadSampleFishes={this.loadSampleFishes}
            fishes={this.state.fishes}
            storeId={this.props.match.params.storeId}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
