import React, { useState } from 'react'

//npm run dev to run app
const Calc = () => {

	const initialValue = []

	let [operator, setOperator] = useState(null)

	let [input, setInput] = useState(initialValue)
	let [firstNumber, setFirstNumber] = useState(null);
	let testOperator = null as string;
	let [secondNumber, setSecondNumber] = useState(null);

	const [totalsum, setTotalsum] = useState(null)



	const add = ((num1, num2) => {
		return num1 + num2
	})

	const subtract = ((num1, num2) => {
		return num1 - num2
	})
	const divide = ((num1, num2) => {
		return num1 / num2
	})
	const multiply = ((num1, num2) => {
		return num1 * num2
	})
	const clearAllData = () => {
		firstNumber = null;
		secondNumber = null;
		operator = null;
	}
	const calculate = () => {
		console.log(operator);
		let operatorIndex = input.findIndex(x => x == operator);
		setSecondNumber(input.filter(index => index > operatorIndex).join(""))
		console.log(`operator: ${operator} first number ${firstNumber} second number ${secondNumber}`)
		setTotalsum(operate(operator, parseInt(firstNumber), parseInt(secondNumber)))

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
	const addItem = (event) => {
		setInput(current => [...current, event.target.id]);
	}


	const addOperator = (event) => {


		if (firstNumber === null) {
			setFirstNumber(parseInt(input.join("")));
			console.log(firstNumber);
		}
		//if operator equals last element in input, do nothing,
		if (event.target.id == input[input.length - 1]) {
			console.log("returns because same value")
			return;
		} else if (operator !== null && operator !== event.target.id) {
			setInput(current => [...current.filter(x => x !== operator), event.target.id]);
			setOperator(event.target.id)
			console.log("test");
		} else {
			addItem(event);
			setOperator(event.target.id)
			console.log("adding in else" + operator)
		}
		console.log(`operator: ${operator} first number ${firstNumber} event.target.id ${event.target.id}`)


		// } else if (event.target.id !== input[input.length - 1] && operator !== null) {
		// 	setInput(current => [...current.pop(), event.target.id]);
		// 	operator = event.target.id;
		// 	console.log("running")
		// }
	}


	const saveInput = ((e) => {
		const currentOperator = e.target.id

		//const currentOperator = input[1]
	})

	// setTotalsum(prevState => parseInt(firstNumber) + parseInt(secondNumber)
	// )



	return (

		<div>
			<div className='main-flex'>
				<div className='calc-flex'>
					<h2>Calculator</h2>
					<div className='result-flex'>
						<h3></h3>

						<div className='result-div'>input {input}</div>
						<div className='totalsum-div'>result {totalsum}</div>
					</div>
					<div>
						<button onClick={addItem} id="1">1</button>
						<button onClick={addItem} id="2">2</button>
						<button onClick={addItem} id="3">3</button>
						<button onClick={addItem} id="4">4</button>
						<button onClick={addItem} id="5">5</button>
						<button onClick={addItem} id="6">6</button>
						<button onClick={addItem} id="7">7</button>
						<button onClick={addItem} id="8">8</button>
						<button onClick={addItem} id="9">9</button>
						<button onClick={addItem} id="0">0</button>
						<button onClick={addOperator} id="+">+</button>
						<button onClick={addOperator} id="-">-</button>
						<button onClick={addOperator} id="/">/</button>
						<button onClick={addOperator} id="*">*</button>
						<button onClick={clearAllData} id="c">C</button>
						<button onClick={calculate} id="=">=</button>
					</div>
				</div>
			</div>
		</div>
	)
}


export default Calc