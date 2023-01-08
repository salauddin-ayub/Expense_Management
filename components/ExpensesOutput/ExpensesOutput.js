import { StyleSheet, Text, View } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";
import { GlobalStyles } from "../../constants/styles";

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
  {
    id: "e5",
    description: "A pair of plate",
    amount: 38.99,
    date: new Date("2022-09-12"),
  },
  {
    id: "e6",
    description: "A pair of Glass",
    amount: 45.99,
    date: new Date("2022-09-12"),
  },
  {
    id: "e7",
    description: "A pair of spone",
    amount: 35.99,
    date: new Date("2022-09-12"),
  },
  {
    id: "e8",
    description: "A pair of bottle",
    amount: 95.99,
    date: new Date("2022-09-12"),
  },
  {
    id: "e9",
    description: "A pair of lemon",
    amount: 35.99,
    date: new Date("2022-09-12"),
  },
  {
    id: "e10",
    description: "A pair of guava",
    amount: 67.99,
    date: new Date("2022-09-12"),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
    flex: 1,
  },
  period: {
    fontSize: 12,
    color: GlobalStyles.colors.primary400,
  },
  sum: {
    fontSize: 16,
    fontWeight: "bold",
    color: GlobalStyles.colors.primary500,
  },
});
