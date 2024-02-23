import { createSlice } from "@reduxjs/toolkit";

interface CalculatorState {
	calculator: number;
}

const initialState: CalculatorState = {
	calculator: 0,
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
			state.calculator = 0;
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
