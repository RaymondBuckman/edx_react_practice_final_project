// venueSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Let's step through the code in the venueSlide.js file. It contains code to slice the Redux state related to venue selection using createSlice from @reduxjs/toolkit.

// The initial state consists of an array of venue objects, each representing a rentable room in the venue. A venue object has properties such as the thumbnail image, name, cost, and quantity.

// The venueSlice.js file includes reducer functions incrementQuantity and decrementQuantity to manage the number of venue items in the state.
// Note: On the last page of this lab, we provide you with the links for images from Pixabay, with appropriate citations, or you may find your own.

// incrementQuantity():
//   This function handles incrementing the quantity of a venue item in the state. It receives an action containing the index of the item to be incremented.
//   It first checks if the item exists in the state at the provided index. If the item exists and it's an Auditorium Hall with a quantity greater than or equal to 3, it returns early without modifying the state.
//   Otherwise, it increments the quantity of the item by one.

// decrementQuantity():
//   This function handles decrementing the quantity of a venue item in the state. It receives an action containing the index of the item to be decremented.
//   It first checks if the item exists in the state at the provided index and if its quantity is greater than 0.
//   If both conditions are met, the quantity of the item will be decreased by one.


export const venueSlice = createSlice({
  name: "venue",
  initialState: [
    {
      img: "https://cdn.pixabay.com/photo/2014/05/05/20/29/conference-room-338563_1280.jpg",
      name: "Conference Room (Capacity:15)",
      cost: 3500,
      quantity: 0,
    },
    {
      img: "https://cdn.pixabay.com/photo/2016/08/16/09/53/international-conference-1597531_1280.jpg",
      name: "Auditorium Hall (Capacity:200)",
      cost: 5500,
      quantity: 0,
    },
    {
      img: "https://cdn.pixabay.com/photo/2019/01/02/07/30/convention-center-3908238_1280.jpg",
      name: "Presentation Room (Capacity:50)",
      cost: 700,
      quantity: 0,
    },
    {
      img: "https://cdn.pixabay.com/photo/2017/03/28/12/06/chairs-2181916_1280.jpg",
      name: "Large Meeting Room (Capacity:10)",
      cost: 900,
      quantity: 0,
    },
    {
      img: "https://cdn.pixabay.com/photo/2015/01/08/18/11/laptops-593296_1280.jpg",
      name: "Small Meeting Room (Capacity:5)",
      cost: 1100,
      quantity: 0,
    },
  
  ],
  reducers: {
   
    incrementQuantity: (state, action) => {
      const { payload: index } = action;
      if (state[index]) {
        if (state[index].name === " Auditorium Hall (Capacity:200)" && state[index].quantity >= 3) {
          return;        }
        state[index].quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const { payload: index } = action;
      if (state[index] && state[index].quantity > 0) {
        state[index].quantity--;
      }
    },
  },
});

export const { incrementQuantity, decrementQuantity } = venueSlice.actions;
export default venueSlice.reducer;