import { useState } from "react";
import ExpenseForm from "./ExpenseForm"
import "./NewExpense.css"
const NewExpense = ({ onAddExpense }) => {
    const [isEditing, setIsEditing] = useState(false);
    const onSaveExpenseData = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        onAddExpense(expenseData)
        setIsEditing(false)
    }
    const startEditing = () => {
        setIsEditing(true)
    }
    const stopEditing = () => {
        setIsEditing(false)
    }
    return <div className="new-expense">
        {!isEditing && <button onClick={startEditing}>Add New Expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseData={onSaveExpenseData} onCancelClick={stopEditing} />}
    </div>
}

export default NewExpense