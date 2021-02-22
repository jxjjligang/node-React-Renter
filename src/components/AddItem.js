import React from "react";

export default class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renterItems: [],
      newItemName: "",
      newItemValue: 100,
      newItemCategory: '',
      newRenterName: "",
      loading: true,
    };
  }

  componentDidMount() {
    this.populateInsuranceData();
  }

  addItem() {
    this.actOnData("POST", "insurance/", {
      category: this.state.newItemCategory,
      itemName: this.state.newItemName,
      itemValue: this.state.newItemValue,
      renterName: this.state.newRenterName,
    }).then((data) => {
      //console.log(data); // JSON data parsed by `data.json()` call
      this.props.reloadData(data);
      this.setState({ renterItems: data });
    });
  }

  render() {
    let contents = this.state.loading ? (
      <p>
        <em>Loading...</em>
      </p>
    ) : (
      this.renderItemsTable(this.state.renterItems)
    );

    return (
      <div>
        <h1 id="tabelLabel">Insured Personal Items</h1>
        {contents}
      </div>
    );
  }

  renderItemsTable(renterItems) {
    let inputMarginStyle = { margin: "5px" };

    return (
      <div>
        {" "}
        <label htmlFor="newRenterName">Renter Name </label>
        <input
          type="text"
          id="newRenterName"
          value={this.state.newRenterName}
          style= {inputMarginStyle}
          onChange={(e) => this.setState({ newRenterName: e.target.value })}
        ></input>
        <label htmlFor="newItemCategory">Item Category </label>
        <input
          type="text"
          id="newItemCategory"
          value={this.state.newItemCategory}
          style= {inputMarginStyle}
          onChange={(e) => this.setState({ newItemCategory: e.target.value })}
        ></input>
        <label htmlFor="newItemName">Item Name </label>
        <input
          type="text"
          id="newItemName"
          value={this.state.newItemName}
          style= {inputMarginStyle}
          onChange={(e) => this.setState({ newItemName: e.target.value })}
        ></input>
        <label htmlFor="newItemValue">Item Value </label>
        <input
          type="number"
          id="newItemValue"
          min="100"
          max="5000"
          step="50"
          style= {inputMarginStyle}
          value={this.state.newItemValue}
          onChange={(e) => this.setState({ newItemValue: e.target.value })}
        ></input>
        <input
          type="button"
          value="Add new Item"
          onClick={(e) => this.addItem()}
        ></input>
      </div>
    );
  }

  async populateInsuranceData() {
    const response = await fetch("insurance");
    const data = await response.json();
    this.setState({ renterItems: data, loading: false });
  }

  async actOnData(method = "POST", url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: method, // POST, GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
}
