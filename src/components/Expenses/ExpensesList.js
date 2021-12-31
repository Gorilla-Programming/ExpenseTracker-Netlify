import './ExpensesList.css';
import ExpenseItem from "./ExpenseItem";
function ExpensesList(props){

    if(props.item.length === 0){
        return <h2  className = "expenses-list__fallback">No Expense Found</h2>
    }

    return(
    <ul className = "expenses-list">
        {
            props.item.map((expense) => (
                <ExpenseItem key={expense.id} data={expense} />
              ))
        }
    
    </ul>
    
    )

}

export default ExpensesList;