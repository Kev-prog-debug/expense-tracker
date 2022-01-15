import "../Expenses/styles/expenses.css";
import "../Expenses/styles/expenseItem.css";
import "./card.css";
const Card = (props) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};
export default Card;
