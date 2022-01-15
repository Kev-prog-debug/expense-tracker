import ExpenseForm from "./ExpenseForm";
import "./styles/newExpense.css";
const NewExpense = ({ onAddingNewExpense }) => {
  const pushNewExpense = (newExpense) => {
    onAddingNewExpense({ ...newExpense, id: Math.random() });
  };

  return (
    <div className="new-expense">
      <ExpenseForm pushNewExpense={pushNewExpense} />
    </div>
  );
};
export default NewExpense;
