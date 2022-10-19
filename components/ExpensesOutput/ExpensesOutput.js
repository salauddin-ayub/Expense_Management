import { View } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of duck",
    amount: 65.99,
    date: new Date("2022-03-15"),
  },
  {
    id: "e2",
    description: "A pair of pen",
    amount: 45.99,
    date: new Date("2022-05-19"),
  },
  {
    id: "e3",
    description: "A pair of pencil",
    amount: 15.99,
    date: new Date("2022-02-22"),
  },
  {
    id: "e4",
    description: "A pair of chair",
    amount: 35.99,
    date: new Date("2022-09-12"),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList />
    </View>
  );
}

export default ExpensesOutput;
