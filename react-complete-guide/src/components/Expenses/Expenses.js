import { useState } from "react"
import Card from "../UI/Card"
import "./Expenses.css"
import ExpensesChart from "./ExpensesChart"
import ExpensesFilter from "./ExpensesFilter"
import ExpensesList from "./ExpensesList"
const Expenses = ({ expenses }) => {
    const [selectedValue, setSelectedValue] = useState('2020');
    const handleSelectChange = (selectValue) => {
        setSelectedValue(selectValue)
    }
    const filteredExpenses = expenses.filter((expense) => {
        return expense.date.getFullYear() === +selectedValue
    })

    return <div>
        <Card className="expenses">
            <ExpensesFilter onSelectChange={handleSelectChange} selected={selectedValue} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList filteredExpenses={filteredExpenses} />
        </Card>
    </div>
}

export default Expenses