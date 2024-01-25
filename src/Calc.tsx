import React, { MouseEvent, ButtonHTMLAttributes, useEffect, useState } from 'react'

//npm run dev to run app
const Calc = () => {

	const initialState = ""
	const [operator, setOperator] = useState(initialState);
	const [firstNumber, setFirstNumber] = useState(initialState);
	const [secondNumber, setSecondNumber] = useState(initialState);
	const [totalsum, setTotalsum] = useState(null)

	const clearAllData = () => {
		setFirstNumber(initialState);
		setSecondNumber(initialState);
		setOperator(initialState);
		setTotalsum(null);
	};

	const resetInputs = (newFirstNumber, newOperator?) => {
		setSecondNumber(initialState);
		setOperator(newOperator);
		setFirstNumber(newFirstNumber)
	};

	const onClickCalculate = (event?, secondoperator?) => {

		const numberOrOperatorMissing = !firstNumber || !secondNumber || !operator;

		if (numberOrOperatorMissing) {
			return;
		}

		let newTotalSum = operate(operator, parseInt(firstNumber), parseInt(secondNumber));

		setTotalsum(newTotalSum);
		resetInputs(newTotalSum, secondoperator ? secondoperator : initialState);

	}
	const operate = ((operator: string, num1: number, num2: number) => {
		switch (operator) {
			case "+":
				return num1 + num2
			case "-":
				return num1 - num2
			case "/":
				return num1 / num2
			case "*":
				return num1 * num2
			default:
				throw new Error
		}
	})

	const addOperator = (event) => {
		const operatorAlreadyExists = operator === event.target.id;
		const allCalculateValuesExists = firstNumber && operator && secondNumber;

		if (allCalculateValuesExists) {
			let secondOperator = event.target.id
			onClickCalculate(event, secondOperator);
		} else if (!firstNumber || operatorAlreadyExists) {
			return
		} else {
			setOperator(event.target.id)
		}

		console.log(`operator: ${operator} first number ${firstNumber} event.target.id ${event.target.id}`)
	}
	const onNumberClick = (event) => {
		//if no operator, set state of first number, else set state of second number
		if (!operator) {
			setFirstNumber(prevState => prevState + event.target.id)
		} else {
			setSecondNumber(prevState => prevState + event.target.id)
		}
	}

	return (

		<div>
			<div className='main-flex'>
				<div className='calc-flex'>
					<h2>Calculator</h2>
					<div className='result-flex'>
						<div className='result-div'>input {firstNumber}{operator}{secondNumber}</div>
						<div className='totalsum-div'>result {totalsum}</div>
					</div>
					<div>
						<button onClick={onNumberClick} id="1">1</button>
						<button onClick={onNumberClick} id="2">2</button>
						<button onClick={onNumberClick} id="3">3</button>
						<button onClick={onNumberClick} id="4">4</button>
						<button onClick={onNumberClick} id="5">5</button>
						<button onClick={onNumberClick} id="6">6</button>
						<button onClick={onNumberClick} id="7">7</button>
						<button onClick={onNumberClick} id="8">8</button>
						<button onClick={onNumberClick} id="9">9</button>
						<button onClick={onNumberClick} id="0">0</button>
						<button onClick={addOperator} id="+">+</button>
						<button onClick={addOperator} id="-">-</button>
						<button onClick={addOperator} id="/">/</button>
						<button onClick={addOperator} id="*">*</button>
						<button onClick={clearAllData} id="c">C</button>
						<button onClick={onClickCalculate} id="=">=</button>
					</div>
				</div>
			</div>
		</div>
	)
}


export default Calc