import React from "react";
import ExpenseItem from "./ExpenseItem";
import classes from "./ExpenseList.module.css";
import { Table } from "react-bootstrap";

import { useSelector } from "react-redux";

const ExpenseList = (props) => {
  const item = useSelector((state) => state.expense.items);
  console.log(item);
  // console.log(ExpenseSliceAction);

  let EachListItem = item.map((item, index) => (
    <ExpenseItem
      onUpdate={props.onUpdate}
      id={item.id}
      key={item.id}
      amount={item.amount}
      categorys={item.categorys}
      description={item.description}
    ></ExpenseItem>
  ));
  return (
    <div>
      <Table striped bordered hover variant="dark">
        <table>
          <thead>
            <tr keys="headtable">
              <th>Amount</th>
              <th>Categorys</th>
              <th>Description</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>{EachListItem}</tbody>
        </table>
      </Table>
      {/* <ul></ul> */}
    </div>
  );
};
export default ExpenseList;
