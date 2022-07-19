let money = prompt("Ваш бюджет на месяц?", 60);
let time = prompt("Введите дату в формате YYYY-MM-DD", "2020 - 10 - 10");
let costName1 = prompt(
  "Введите обязательную статью расходов в этом месяце #1",
  "milk"
);
let cost1 = prompt("Во сколько обойдется #1?", 10);
let costName2 = prompt(
  "Введите обязательную статью расходов в этом месяце #2",
  "bread"
);
let cost2 = prompt("Во сколько обойдется #2?", 15);

let appData = {
  budjet: money,
  timeData: time,
  expenses: {
    [costName1]: cost1,
    [costName2]: cost2,
  },
  optionalExpenses: "",
  income: "",
  savings: false,
};

alert(`Ваш бюджет на 1 день составляет ${money / 30}`);
console.log(appData.expenses);
