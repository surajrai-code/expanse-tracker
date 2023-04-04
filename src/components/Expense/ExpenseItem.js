import React from "react";
import classes from "./ExpenseItem.module.css";

import { useDispatch, useSelector } from "react-redux";
import { ExpenseSliceAction } from "../../store/Expense";

const ExpenseItem = (props) => {
  const items = useSelector((state) => state.expense.items);
  const Premium = <button className={classes["Premium"]}>Premium</button>;

  const Dispatch = useDispatch();
  const EditButtonHandler = () => {
    props.onUpdate(props);
    //console.log("EditButtonHandler", props);
  };

  const filetredLits = (id, items) => {
    const list = items.filter((todo) => todo.id !== id);

    return list;
  };
  const deleteButtonHandler = async () => {
    // ctx.deleteItem(props.id);
    console.log("deleteButtonHandler", props.id);
    let emailId = localStorage.getItem("mailid").replace(/[&@.]/g, "");

    try {
      const response = await fetch(
        `https://expance-tracker-2795d-default-rtdb.firebaseio.com/tracker/${emailId}/${props.id}.json`,
        {
          method: "DELETE",

          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      const list = await filetredLits(props.id, items);
      Dispatch(ExpenseSliceAction.removeItem(list));
    } catch (error) {
      console.log(error.message);

      // console.log(list);
      // Dispatch(ExpenseSliceAction.removeItem(list));
    }
  };
  return (
    <tr key={props.id}>
      <td>{props.amount}</td>
      <td>{props.categorys}</td>
      <td>{props.description}</td>
      <td
        onClick={() => EditButtonHandler(props.id)}
        className={classes["edit-btn"]}
      >
        {/* <button>
            edit
          </button> */}
        Edit
      </td>
      <td
        className={classes["delete-btn"]}
        onClick={() => deleteButtonHandler(props.id)}
      >
        {/* <button
           
            className={classes["delete-btn"]}
          >
            delete
          </button> */}
        delete
      </td>
    </tr>
  );
};
export default ExpenseItem;
