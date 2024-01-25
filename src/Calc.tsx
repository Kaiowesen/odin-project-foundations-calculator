import React, { useEffect, useState } from 'react'

//npm run dev to run app
const Calc = () => {

	const initialState = ""

	let [operator, setOperator] = useState(initialState);
	let [secondOperator, setSecondOperator] = useState(initialState)
	let [firstNumber, setFirstNumber] = useState(initialState);
	let [secondNumber, setSecondNumber] = useState(initialState);
	let [totalsum, setTotalsum] = useState(null)
	// useEffect(() => {
	// 	resetInput()
	// }, [totalsum])
	const clearAllData = () => {
		setFirstNumber(initialState);
		setSecondNumber(initialState);
		setOperator(initialState);
		setTotalsum(null);
	};
	const resetInput = (newFirstNumber, newOperator?) => {
		setSecondNumber(initialState);
		setOperator(newOperator);
		setFirstNumber(newFirstNumber)
	}
	const onClickCalculate = (event, secondoperator?) => {
		let optionalOperator = secondoperator ? secondoperator : initialState
		console.log(` onClickCalculate operator: ${operator} second operator ${secondOperator}first number ${firstNumber} second number ${secondNumber}`)
		let newTotalSum = operate(operator, parseInt(firstNumber), parseInt(secondNumber));
		setTotalsum(newTotalSum);
		resetInput(newTotalSum, optionalOperator);

	}
	const operate = ((operator, num1, num2) => {

		if (operator == "+") {
			return num1 + num2
		}
		if (operator == "-") {
			return num1 - num2
		}
		if (operator == "/") {
			return num1 / num2
		}
		if (operator == "*") {
			return num1 * num2
		}
		else return
	})

	const addOperator = (event) => {
		if (firstNumber && operator && secondNumber) {
			let secondOperator = event.target.id
			onClickCalculate(event, secondOperator);
		}
		//if first number is null or operator is the same, do nothing
		if (!firstNumber || operator === event.target.id) {
			return
		} else {
			setOperator(event.target.id)
		}

		console.log(`operator: ${operator} first number ${firstNumber} event.target.id ${event.target.id}`)



	}
	const onNumberClick = (event) => {
		//if no operator, set state of first number, else set state of second number
		!operator ? setFirstNumber(prevState => prevState + event.target.id) : setSecondNumber(prevState => prevState + event.target.id)
	}

	return (

		<div>
			<div className='main-flex'>
				<div className='calc-flex'>
					<h2>Calculator</h2>
					<div className='result-flex'>
						<h3></h3>

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