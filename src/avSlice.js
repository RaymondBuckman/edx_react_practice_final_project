import { createSlice } from "@reduxjs/toolkit";

// Now, it's your turn to write some code. In this section, you will create the add-ons section. To begin, you need to first create 
// logic within avSlice.js under the src folder. Initialize the initialState array variable with objects to provide a data structure. 
// Note that you need to add your own images and the appropriate paths to them in the data below. Links to sample images are provided 
// in Task 1: Setting up the environment. Include the code below within initialState of avSlice.js.

export const avSlice = createSlice({
  name: "av",
  initialState: [
        {
            img: "https://pixabay.com/images/download/business-20031_640.jpg",
            name: "Projectors",
            cost: 200,
            quantity: 0,
        },
        {
            img: "https://pixabay.com/images/download/speakers-4109274_640.jpg",
            name: "Speaker",
            cost: 35,
            quantity: 0,
        },
        {
            img: "https://pixabay.com/images/download/public-speaking-3926344_640.jpg",
            name: "Microphones",
            cost: 45,
            quantity: 0,
        },
        {
            img: "https://pixabay.com/images/download/whiteboard-2903269_640.png",
            name: "Whiteboards",
            cost: 80,
            quantity: 0,
        },

        {
            img: "https://pixabay.com/images/download/signpost-235079_640.jpg",
            name: "Signage",
            cost: 80,
            quantity: 0,
        },
  ],

    // Increment and decrement

    // Now, you need to create the logic for incrementAvQuantity() and decrementAvQuantity() functions.

    reducers: {
        // The incrementAvQuantity() reducer function increments the quantity of a specific item in the state.
        // It takes two parameters: state and action.
        // The action.payload object contains the identifier of the item to increment.
        // The reducer retrieves the item from the state using state[action.payload].
        // If the item exists, it increments its quantity property by 1.
        incrementAvQuantity: (state, action) => {
            const item = state[action.payload];
            if (item) {
                item.quantity++;
            }
        },
        
        // The decrementAvQuantity() reducer function decrements the quantity of a specific item in the state.
        // Similar to incrementAvQuantity(), it takes two parameters: state and action.
        // The action.payload object contains the item identifier to decrement. - It's reducer retrieves the item from the state using state[action.payload].
        // If the item exists and its quantity is greater than 0, it decrements its quantity property by 1, ensuring the quantity doesn't drop below 0 and indicates no more available items.
        decrementAvQuantity: (state, action) => {
            const item = state[action.payload];
            if (item && item.quantity > 0) {
                item.quantity--;
            }
        },
    },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;