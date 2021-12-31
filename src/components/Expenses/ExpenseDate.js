import './ExpenseDate.css'

function ExpenseDate(props) {
  const month = props.data.toLocaleDateString("en-US", { month: "long" });
  const year = props.data.getFullYear();
  const day = props.data.toLocaleDateString("en-US", { day: "2-digit" });
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
