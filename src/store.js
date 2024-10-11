import { configureStore } from '@reduxjs/toolkit';
import venueReducer from './venueSlice';
import avReducer from './avSlice';
import mealsReducer from './mealsSlice';

// [T3] 5. Redux Store Setup. Now we'll look at the store.js file. Create the Redux store with the configureStore() function from @reduxjs/toolkit
// [T3] 6. The store.js file contains a reducer called venue(), imported from venueSlice.js
// [T3] 7. This code creates a global Redux store using the @reduxjs/toolkit\ configureStore() function so all components in the application can access the state managed by the venueReducer().
// (jump to ConferenceEvent)
export default configureStore({
  reducer: {
    venue: venueReducer,
    av: avReducer,
    meals: mealsReducer,
  },
});