import './ExpenseForm.css';
import {useState} from "react";

const ExpenseForm = () => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const onTitleChangeHandler = (event) => {
        setTitle(event.target.value);
    };

    const onAmountChangeHandler = (event) => {
        setAmount(event.target.value);
    };

    const onDateChangeHandler = (event) => {
        setDate((event.target.value));
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
          title: title,
          amount: amount,
          date: new Date(date)
        };
        console.log(expenseData);
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={onTitleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={onAmountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" onChange={onDateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;