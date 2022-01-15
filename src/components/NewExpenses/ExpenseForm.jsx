import { useState } from "react";
import "./styles/expenseForm.css";
const ExpenseForm = ({ pushNewExpense }) => {
  const [toggle, setToggle] = useState(false);
  const [input, setInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const handleInput = (e) => {
    if (e.target.name === "date") {
      setInput((prevState) => {
        const date = e.target.value ? e.target.value : new Date().getFullYear();
        return { ...prevState, date: new Date(date) };
      });
    } else {
      setInput((prevState) => {
        return { ...prevState, [e.target.name]: e.target.value };
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    pushNewExpense(input);
    setToggle(false);
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };
  console.log(toggle);
  if (toggle) {
    return (
      <form onSubmit={handleSubmit}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" name="title" onChange={handleInput} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              required
              name="amount"
              onChange={handleInput}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input type="date" name="date" onChange={handleInput} />
          </div>
        </div>
        <div className="new-expense__actions">
          <button onClick={handleToggle}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    );
  } else {
    return (
      <form>
        <div className="new-expense__actions">
          <button onClick={handleToggle}>Add New Expense</button>
        </div>
      </form>
    );
  }
};
export default ExpenseForm;
