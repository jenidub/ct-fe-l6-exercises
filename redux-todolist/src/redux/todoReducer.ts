import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Task {
    name: string;
    active: boolean;
    completed: boolean;
}

interface ToDoListState {
    toDoList: Task[];
}

const initialState: ToDoListState = {
    toDoList: [],
}

// Build a simple to-do list app where students add, remove, and mark items as complete.
// Define actions for adding and removing items.

const toDoSlice = createSlice({
    name: "ToDoList",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<string>) => {
            state.toDoList.push({
                name: action.payload,
                active: true,
                completed: false,
            })
        },

        removeTask: (state, action: PayloadAction<string>) => {
            const updatedState = state.toDoList.filter((task) => task.name !== action.payload);
            state.toDoList = updatedState;
        },

        toggleCompleted: (state, action: PayloadAction<string>) => {
            const selectedTask = state.toDoList.find(task => task.name == action.payload);
            if (selectedTask) {
                selectedTask.active = !selectedTask.active;
                selectedTask.completed = !selectedTask.completed;
            }
        }
    },
});

export const { addTask, removeTask, toggleCompleted } = toDoSlice.actions;
export default toDoSlice.reducer;
