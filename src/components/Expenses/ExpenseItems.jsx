import { useState } from "react";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import "./styles/expenses.css";
import ExpensesChart from "./ExpensesChart";
const ExpenseItems = ({ expenses }) => {
  const [selectedYear, setSelectedYear] = useState("2021");

  const onSelectOptions = (option) => {
    setSelectedYear(option);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={selectedYear}
        onSelectOptions={onSelectOptions}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList filteredExpenses={filteredExpenses} />
    </Card>
  );
};
export default ExpenseItems;
