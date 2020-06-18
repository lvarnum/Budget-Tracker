import React, { Component } from "react";
import Table from "../Table";

class Form extends Component {
    state = {
        items: [],
        expenses: [],
        totalExpenses: 0
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.setState({
            items: [...this.state.items, event.target.budgetItem.value],
            expenses: [...this.state.expenses, parseFloat(event.target.itemPrice.value)],
            totalExpenses: this.state.totalExpenses + parseFloat(event.target.itemPrice.value)
        });
        event.target.budgetItem.value = "";
        event.target.itemPrice.value = "";
    }

    render() {
        return (
            <>
                <h3 className="mt-5 text-center">Total Expenses: ${this.state.totalExpenses.toFixed(2)}</h3>
                <form className="mt-5 mx-auto" style={{ width: "60%" }} onSubmit={this.handleFormSubmit}>
                    <div className="form-group">
                        <label for="budgetItem">Enter Item:</label>
                        <input type="text" className="form-control" id="budgetItem" name="budgetItem" />
                    </div>
                    <div className="form-group">
                        <label for="itemPrice">Enter Item Price:</label>
                        <input type="text" className="form-control" id="itemPrice" name="itemPrice" />
                    </div>
                    <button type="submit" className="btn btn-primary d-block mx-auto">Add Expense</button>
                </form>

                <Table items={this.state.items} expenses={this.state.expenses}/>
            </>
        );
    }
}

export default Form;