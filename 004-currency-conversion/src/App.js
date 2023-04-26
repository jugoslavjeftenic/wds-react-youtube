import React, { useEffect, useState } from 'react';
import './App.css';
import CurrencyRow from './CurrencyRow';

const BASE_URL = "https://api.exchangerate.host/latest";

function App() {
	const [currencyOptions, setCurrencyOptions] = useState([]);
	const [fromCurrency, setFromCurrency] = useState();
	const [toCurrency, setToCurrency] = useState();
	const [exchangeRate, setExchangeRate] = useState();
	const [amount, setAmount] = useState(1);
	const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

	let toAmount, fromAmount;
	if (amountInFromCurrency) {
		fromAmount = amount;
		toAmount = amount * exchangeRate;
	}
	else {
		fromAmount = amount / exchangeRate;
		toAmount = amount;
	}

	useEffect(() => {
		fetch(BASE_URL)
			.then(res => res.json())
			.then(data => {
				const RSDCurrency = Object.keys(data.rates)[119];
				setFromCurrency(data.base);
				setCurrencyOptions([...Object.keys(data.rates)]);
				setToCurrency(RSDCurrency);
				setExchangeRate(data.rates[RSDCurrency]);
			});
	}, []);

	useEffect(() => {
		if (fromCurrency != null && toCurrency != null) {
			fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
				.then(res => res.json())
				.then(data => setExchangeRate(data.rates[toCurrency]));
		}
	}, [fromCurrency, toCurrency]);

	function handleFromAmountChange(e) {
		setAmount(e.target.value);
		setAmountInFromCurrency(true);
	}

	function handleToAmountChange(e) {
		setAmount(e.target.value);
		setAmountInFromCurrency(false);
	}

	return (
		<>
			<h1>Convert</h1>
			<CurrencyRow
				currencyOptions={currencyOptions}
				selectedCurrency={fromCurrency}
				onChangeCurrency={e => setFromCurrency(e.target.value)}
				onChangeAmount={handleFromAmountChange}
				amount={fromAmount}
			/>
			<div className='equals'>=</div>
			<CurrencyRow
				currencyOptions={currencyOptions}
				selectedCurrency={toCurrency}
				onChangeCurrency={e => setToCurrency(e.target.value)}
				onChangeAmount={handleToAmountChange}
				amount={toAmount}
			/>
		</>
	);
}

export default App;
