import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    students: [],
    editingStudent: null, // giữ sinh viên đang edit
    searchKeyword: ""
};

const studentSlice = createSlice({
    name: "students",
    initialState,
    reducers: {
        addStudent: (state, action) => {
            state.students.push(action.payload);
        },
        deleteStudent: (state, action) => {
            state.students = state.students.filter(
                s => s.maSV !== action.payload
            );
        },
        setEditingStudent: (state, action) => {
            state.editingStudent = action.payload; // chứa object SV khi click Edit
        },
        updateStudent: (state, action) => {
            const index = state.students.findIndex(
                s => s.maSV === action.payload.maSV
            );
            if (index !== -1) state.students[index] = action.payload;

            state.editingStudent = null; // reset form
        },
        setSearchKeyword: (state, action) => {
            state.searchKeyword = action.payload;
        }
    }
});

export const {
    addStudent, deleteStudent,
    setEditingStudent, updateStudent,
    setSearchKeyword
} = studentSlice.actions;

export default studentSlice.reducer;
