import React from "react";

function Table(props) {
    return (
        <table className="table table-striped text-center mt-5 mx-auto mb-5" style={{ width: "60%" }}>
            <thead className="text-white">
                <tr>
                    <th scope="col">Item Name</th>
                    <th scope="col">Item Price</th>
                </tr>
            </thead>
            <tbody>
                {props.items.map((item, index) => (
                    <tr>
                        <td>{item}</td>
                        <td>${props.expenses[index].toFixed(2)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;