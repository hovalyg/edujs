let money = +prompt("Ваш бюджет на месяц?", 50000),
  time = prompt("Введите дату в формате YYYY-MM-DD", "2020 - 10 - 10");

let appData = {
  budjet: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,
};

for (let i = 0; i < 2; i++) {
  let costName = prompt(
      `Введите обязательную статью расходов в этом месяце #${i + 1}`,
      "milk"
    ),
    cost = prompt(`Во сколько обойдется #${i + 1}`, 10);

  if (
    typeof costName === "string" &&
    typeof costName != null &&
    typeof cost != null &&
    costName != "" &&
    cost != "" &&
    costName.length < 50
  ) {
    console.log("done");
    appData.expenses[costName] = cost;
  }
}

appData.moneyPerDay = appData.budjet / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
  console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
  console.log("Высокий уровень достатка");
} else {
  console.log("Ошибка");
}
