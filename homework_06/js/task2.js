/* Task2: Convector of currencies 

The exchange rate is current for 07.02.2018 
Source: https://finance.i.ua/nbu */

(function() {

var euroAmount = Number(prompt("Enter amount of EURO: ", "0"));
var dollarAmount = Number(prompt("Enter amount of USD: ", "0"));
var euroExchange, dollarExchange, euroToDollar;

// 1 EURO is equal 33.8565 UAH
const EURO = 33.8565;
// 1 USD is equal 27.4609 UAH
const USD = 27.4609;

// Function for calculation exchange of currencies
function exchangeCurrencies(e, u) {
    euroExchange = (e * EURO).toFixed(2);
    dollarExchange = (u * USD).toFixed(2);
    euroToDollar = (EURO / USD).toFixed(2);
}

// Execute function exchangeCurrencies
exchangeCurrencies(euroAmount, dollarAmount);

// Checking input data and output result
if (euroAmount<0 || dollarAmount<0 || isNaN(euroAmount) || isNaN(euroAmount)) {
    console.log('Incorrect data! The value of amount of EURO or USD could not be "negative number", "zero", "string" or "empty line".');
    return;
} else {
    console.log(euroAmount + ' euros are equal ' + euroExchange + ' UAH, ' + dollarAmount + ' dollars are equal ' + dollarExchange + ' UAH, one euro is equal ' + euroToDollar + ' dollars.');
}

})();