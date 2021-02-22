import React, { Component } from 'react';

export class Insurance extends Component {
    static displayName = Insurance.name;

    constructor(props) {
        super(props);
        this.state = { categoryAndItems: [], loading: true, newItemName: '', newItemValue: 0, newItemCategoryId: 1 };
    }

    componentDidMount() {
        this.populateInsuranceData();
    }

    deleteItem(itemId) {
        this.actOnData('DELETE', `insurance/item/${itemId}`)
            .then(data => {
                //console.log(data); // JSON data parsed by `data.json()` call
                this.setState({ categoryAndItems: data, loading: false });
            });
    }

    addItem() {
        this.actOnData('POST', 'insurance/', { id: -1, RenterName: 'No Name', categoryId: this.state.newItemCategoryId, itemName: this.state.newItemName, itemValue: this.state.newItemValue })
            .then(data => {
                //console.log(data); // JSON data parsed by `data.json()` call
                this.setState({ categoryAndItems: data, loading: false });
            });
    }

    renderItemsTable(categoryAndItems) {
        return (
            <div>
                <div>
                    <label htmlFor="newItemCategory">Item Category</label>
                    <select value={this.state.newItemCategoryId} id="newItemCategory" onChange={e => this.setState({ newItemCategoryId: e.target.value })}>
                        {categoryAndItems.categories.map(ct => (
                            <option key={ct.id} value={ct.id}>
                                {ct.name}
                            </option>
                        ))}
                    </select>
                    <label htmlFor="newItemName">Item Name</label>
                    <input type="text" id="newItemName" value={this.state.newItemName} onChange={e => this.setState({ newItemName: e.target.value })}></input>
                    <label htmlFor="newItemValue">Item Value</label>
                    <input type="number" id="newItemValue" min="100" max="5000" step="50" value={this.state.newItemValue} onChange={e => this.setState({ newItemValue: e.target.value })}></input>
                    <input type="button" value="Add a new Item" onClick={e => this.addItem()}></input>
                </div>
                <table className='table table-striped' aria-labelledby="tabelLabel">
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Item Name</th>
                            <th>Item Value</th>
                            <th>Delete Item</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categoryAndItems.items.map(item =>
                            <tr key={item.id}>
                                <td>{categoryAndItems.categories.find(ct => ct.id === item.categoryId).name}</td>
                                <td>{item.itemName}</td>
                                <td>{item.itemValue}</td>
                                <td><input type="button" value="delete" onClick={e => this.deleteItem(item.id)}></input></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderItemsTable(this.state.categoryAndItems);

        return (
            <div>
                <h1 id="tabelLabel" >Insured Personal Items</h1>
                {contents}
            </div>
        );
    }

    async populateInsuranceData() {
        const response = await fetch('insurance');
        const data = await response.json();
        this.setState({ categoryAndItems: data, loading: false });
    }

    async actOnData(method = 'POST', url = '', data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
            method: method, // POST, GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
    }
}
