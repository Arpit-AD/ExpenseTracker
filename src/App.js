import React, {useState} from "react";

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
    
      {
        id: "e1",
        title: "Netflix",
        amount: 500,
        date: new Date(2020, 7, 14),
      },
      {
        id: "e2",
        title: "New TV",
        amount: 65000,
        date: new Date(2021, 2, 12),
      },
      {
        id: "e3",
        title: "Car Insurance",
        amount: 2800,
        date: new Date(2021, 3, 28),
      },
      {
        id: "e4",
        title: "New Desk (Wooden)",
        amount: 12450,
        date: new Date(2021, 5, 12),
      },
    ]
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES); 
  const addExpenseHandler = (expense) => {
    setExpenses([expense, ...expenses])

  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
