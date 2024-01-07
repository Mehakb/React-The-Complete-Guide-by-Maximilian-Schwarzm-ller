import { useState } from "react"
import "./ExpenseForm.css"
const ExpenseForm = ({ onSaveExpenseData, onCancelClick }) => {
    const [userInput, setUserInput] = useState({
        title: '',
        amount: '',
        date: ''
    })
    const titleHandleChange = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                title: event.target.value
            }
        })
    }
    const amountHandleChange = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                amount: event.target.value
            }
        })
    }
    const dateHandleChange = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                date: event.target.value
            }
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {
            ...userInput,
            amount: +userInput.amount,
            date: new Date(userInput.date)
        };
        onSaveExpenseData(formData)
        setUserInput({
            title: '',
            amount: '',
            date: ''
        })
    }

    return <form onSubmit={handleSubmit}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" onChange={titleHandleChange} value={userInput.title} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" onChange={amountHandleChange} value={userInput.amount} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateHandleChange} value={userInput.date} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="button" onClick={onCancelClick}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm