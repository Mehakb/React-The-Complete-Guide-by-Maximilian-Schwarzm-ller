import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css"
const ExpensesList = ({ filteredExpenses }) => {
    if (filteredExpenses.length === 0) {
        return <h2 className="expenses-list__fallback">
            Found no expenses.
        </h2>
    }
    return (
        <ul className="expenses-list ">
            {filteredExpenses.map(item => <ExpenseItem key={item.id} {...item} />)}
        </ul>
    );
}

export default ExpensesList;
