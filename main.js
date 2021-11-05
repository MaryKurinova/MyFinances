// Доходы

const   incomeSalary = document.getElementById('income-salary'),
        incomeExtra = document.getElementById('income-extra-1');

// Расходы

const   costsKitchen = document.getElementById('costs-kitchen'),
        costsHouseServices = document.getElementById('costs-house-services'),
        costsTransport = document.getElementById('costs-transport'),
        costsCredit = document.getElementById('costs-credit');

// Доступный остаток

const totalMonthInput = document.getElementById('total-month'),
      totalDayInput = document.getElementById('total-day'),
      totalYearInput = document.getElementById('total-year');

let totalMonth, totalDay, totalYear;

//Копилка
const moneyBoxRange = document.getElementById('money-box-range'),
      accumulationInput = document.getElementById('accumulation'),
      spend = document.getElementById('spend');

let accumulation = 0;
let totalPrecents = 0;

const inputs = document.querySelectorAll('.input');
for(input of inputs) {
    input.addEventListener('input', () => {
          countingAvaliableMoney();
          calculationPercents();
    })
}

const strToNum = str => str.value ? parseInt(str.value) : 0

const countingAvaliableMoney = () => {
    const totalPerMonth = strToNum(incomeSalary) + strToNum(incomeExtra);
    const totalCosts = strToNum(costsKitchen) + strToNum(costsHouseServices) + strToNum(costsTransport) + strToNum(costsCredit);
    
    totalMonth = totalPerMonth - totalCosts;
    totalMonthInput.value = totalMonth;
    
}

moneyBoxRange.addEventListener('input', e => {
    const totalPrecentEl = document.getElementById('total-precents');
    totalPrecents = e.target.value;
    totalPrecentEl.innerHTML = totalPrecents;
    calculationPercents();
});

const calculationPercents = () => {
    accumulation = ((totalMonth * totalPrecents) / 100).toFixed();
    accumulationInput.value = accumulation;

    spend.value = totalMonth - accumulation;

    totalDay = (spend.value / 30).toFixed();
    totalDayInput.value = totalDay;

    totalYear = accumulation * 12;
    totalYearInput.value = totalYear;



}