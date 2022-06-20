import './ExpenseItem.css';
import './ExpenseDate';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import {useState} from "react";

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.expense.title);

    const onClickHandler = () => {
        setTitle('Updated');
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.expense.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.expense.amount}</div>
            </div>
            <button onClick={onClickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;