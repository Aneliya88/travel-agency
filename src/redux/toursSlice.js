import { createSlice } from '@reduxjs/toolkit'

export const toursSlice = createSlice ({
    name: 'tours',
    initialState: {
        selectedCategory: "All"
    },
    reducers: {
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload;
        }
    }
})
export const getSelectedCategory = state => state.tours.selectedCategory;
export const { filterCategory } = toursSlice.actions;
export default toursSlice.reducer;