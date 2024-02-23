import { createSlice } from "@reduxjs/toolkit";

interface CalculatorType {
	number1: number;
	number2: number;
}

interface CalculatorState {
	calculator: CalculatorType[];
}

const initialState: CalculatorState = {
	calculator: [],
};

const CalculatorSlice = createSlice({
	name: "calculator",
	initialState,
	reducers: {
		PlusNumber: (state, action) => {
			state.calculator = action.payload.values;
		},
		MinusNumber: (state, action) => {
			state.calculator = action.payload.values;
		},
		Multiplication: (state, action) => {
			state.calculator = action.payload.values;
		},
		Division: (state, action) => {
			state.calculator = action.payload.values;
		},
		ClickNumber: (state, action) => {
			state.calculator = action.payload.values;
		},
		Clear: (state) => {
			state.calculator = [];
		},
	},
});

export const CalculatorData = CalculatorSlice.reducer;

export const {
	PlusNumber,
	MinusNumber,
	Multiplication,
	Division,
	Clear,
	ClickNumber,
} = CalculatorSlice.actions;
