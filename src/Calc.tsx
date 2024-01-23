import React, { useEffect, useState } from 'react'

//npm run dev to run app
const Calc = () => {

	const initialState = ""

	let [operator, setOperator] = useState(initialState);
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
	const resetInput = () => {
		setSecondNumber(initialState);
		setOperator(initialState);
		setFirstNumber(totalsum)
	}
	const calculate = () => {

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

	const addOperator = (event) => {
		//if first number is null or operator is the same, do nothing
		if (!firstNumber || operator === event.target.id) {
			return
		} else {
			setOperator(event.target.id)
		}

		console.log(`operator: ${operator} first number ${firstNumber} event.target.id ${event.target.id}`)



	}
	const setState = (event) => {
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
						<button onClick={setState} id="1">1</button>
						<button onClick={setState} id="2">2</button>
						<button onClick={setState} id="3">3</button>
						<button onClick={setState} id="4">4</button>
						<button onClick={setState} id="5">5</button>
						<button onClick={setState} id="6">6</button>
						<button onClick={setState} id="7">7</button>
						<button onClick={setState} id="8">8</button>
						<button onClick={setState} id="9">9</button>
						<button onClick={setState} id="0">0</button>
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