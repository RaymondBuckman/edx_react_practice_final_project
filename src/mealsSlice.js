import { createSlice } from '@reduxjs/toolkit';

// In this section, you will write the code for the meal selection functionality. To perform this functionality, you will include 
// checkboxes to select the meals, allowing clients to click on a checkbox to select an item or uncheck it to deselect it.

// Meal states
// Navigate to the mealsSlice.js file in the src folder. It will include four meal items in an array. Include the code below within 
// the initialState variable.

export const mealsSlice = createSlice({
  name: 'meals',
  initialState: [
    { name: 'Breakfast', cost: 50, selected: false },
    { name: 'High Tea', cost: 25, selected: false },
    { name: 'Lunch', cost: 65, selected: false },
    { name: 'Dinner', cost: 70, selected: false },
  ],
  reducers: {
    // The toggleMealSelection function toggles the selected property of a specific item in the state. It takes the current state 
    // and an action object, using action.payload to identify the item to update. It then switches the selected status of that item 
    // from true to false or vice versa.
    toggleMealSelection: (state, action) => {
        state[action.payload].selected = !state[action.payload].selected;
  },
  },
});

export const { toggleMealSelection } = mealsSlice.actions;
export default mealsSlice.reducer;