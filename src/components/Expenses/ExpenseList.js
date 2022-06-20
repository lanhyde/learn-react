import './Expenses.css';
import './ExpenseItem';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
function ExpenseList(props) {
    return (
        <Card className="expenses">
            {props.expenses.map(expense =>
                <ExpenseItem expense={expense} />
            )}
        </Card>
    );
}

export default ExpenseList;