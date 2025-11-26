import { configureStore } from "@reduxjs/toolkit";
import toDoSlice from './todoReducer';

export const store = configureStore({
    reducer: {
        toDoList: toDoSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


// TODO: Define Action Types and Actions:
// In actions.ts, define action types as constants or an enum.
// Create action creators for each action type.

// Create the Reducer:
// In todoReducer.ts, define the initial state and state type.
// Define the todoReducer function to handle each action.

// Set Up the Redux Store:
// In store.ts, configure the store with the todoReducer

// Wrap the Application with the Redux Provider
// In index.tsx or your main entry file, wrap <App /> with the Redux Provider and pass the store.

// Build the To-Do List Component
// Create a TodoList.tsx component.
// Use useSelector to read the list of todos and useDispatch to dispatch actions

// Add the Component to the App
// In App.tsx, import and render the TodoList component

// Test the To-Do List App
// Run your application to make sure everything works as expected.
// Verify that you can add new items, toggle completion, and remove items, with all changes managed by Redux.
