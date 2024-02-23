import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../redux/store";
import scss from "./Calculator.module.scss";
import {
	Clear,
	ClickNumber,
	Division,
	MinusNumber,
	Multiplication,
	PlusNumber,
} from "../redux/tools/calculatorSlise";

const Calculator: React.FC = () => {
	const dispatch = useDispatch();
	const ResultCalculator = useAppSelector(
		(state) => state.CalculatorData.calculator
	);
	const [number1, setNumber1] = useState<number>(0);
	const [number2, setNumber2] = useState<number>(0);

	const plusNumber = () => {
		if (isNaN(number1) || isNaN(number2)) {
			alert("Заполните поля числами");
		} else {
			dispatch(PlusNumber({ values: number1 + number2 }));
			setNumber1(0);
			setNumber2(0);
		}
	};

	const minusNumber = () => {
		dispatch(MinusNumber({ values: number1 - number2 }));
		setNumber1(0);
		setNumber2(0);
	};

	const multiplicationNumber = () => {
		dispatch(Multiplication({ values: number1 * number2 }));
		setNumber1(0);
		setNumber2(0);
	};

	const divisionNumber = () => {
		if (+number2 === 0) {
			alert("Деление на ноль невозможно");
		} else {
			dispatch(Division({ values: number1 / number2 }));
			setNumber1(0);
			setNumber2(0);
		}
	};

	const handleNumberClick = (num: number) => {
		if (number1 === 0) {
			setNumber1(num);
			dispatch(ClickNumber(num));
		} else {
			setNumber2(num);
			dispatch(ClickNumber(num));
			console.log(number1);
		}
	};

	const clearAll = () => {
		dispatch(Clear([]));
		setNumber1(0);
		setNumber2(0);
	};

	return (
		<div className={scss.Calculator}>
			<h1>Calculator</h1>
			<div className={scss.calculatorBox}>
				<div className={scss.inputs}>
					<input
						type="text"
						placeholder="number"
						value={number1}
						onChange={(e) => setNumber1(+e.target.value)}
					/>
					<input
						type="text"
						placeholder="number"
						value={number2}
						onChange={(e) => setNumber2(+e.target.value)}
					/>
				</div>
				<div className={scss.display}>
					<p>
						{/* <span>{number1}</span>
						<span>{number2}</span> */}
						{ResultCalculator}
					</p>
				</div>
				<div className={scss.buttons}>
					<button onClick={clearAll} className={`${scss.btn} ${scss.btnGray}`}>
						ac
					</button>
					<button className={`${scss.btn} ${scss.btnGray}`}>+/-</button>
					<button className={`${scss.btn} ${scss.btnGray}`}>%</button>
					<button
						onClick={divisionNumber}
						className={`${scss.btn} ${scss.btnOrange}`}>
						/
					</button>

					<button onClick={() => handleNumberClick(7)} className={scss.btn}>
						7
					</button>
					<button onClick={() => handleNumberClick(8)} className={scss.btn}>
						8
					</button>
					<button onClick={() => handleNumberClick(9)} className={scss.btn}>
						9
					</button>
					<button
						onClick={multiplicationNumber}
						className={`${scss.btn} ${scss.btnOrange}`}>
						X
					</button>

					<button onClick={() => handleNumberClick(4)} className={scss.btn}>
						4
					</button>
					<button onClick={() => handleNumberClick(5)} className={scss.btn}>
						5
					</button>
					<button onClick={() => handleNumberClick(6)} className={scss.btn}>
						6
					</button>
					<button
						onClick={minusNumber}
						className={`${scss.btn} ${scss.btnOrange}`}>
						-
					</button>

					<button onClick={() => handleNumberClick(1)} className={scss.btn}>
						1
					</button>
					<button onClick={() => handleNumberClick(2)} className={scss.btn}>
						2
					</button>
					<button onClick={() => handleNumberClick(3)} className={scss.btn}>
						3
					</button>
					<button
						onClick={plusNumber}
						className={`${scss.btn} ${scss.btnOrange}`}>
						+
					</button>

					<button
						onClick={() => handleNumberClick(0)}
						className={`${scss.btn} ${scss.btnZero}`}>
						0
					</button>
					<button className={scss.btn}>.</button>
					<button className={`${scss.btn} ${scss.btnOrange}`}>=</button>
				</div>
			</div>
		</div>
	);
};

export default Calculator;
