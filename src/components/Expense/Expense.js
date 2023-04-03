import { useState } from "react";
import ExpenseTable from "./ExpenseTable";
import ExpenseForm from "./ExpenseForm";

function Expense() {
    const [expensesData,setExpensesData] =useState([]);
    
    return (
        <>
            <section>
                <ExpenseForm  setExpensesData={setExpensesData} />
                <ExpenseTable expensesData={expensesData}  setExpensesData={setExpensesData}/>
            </section>
        </>
    );
}

export default Expense;