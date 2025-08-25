const { createSlice, nanoid } = require("@reduxjs/toolkit");

const initialState = {
  students: [],
};

const Slice = createSlice({
  name: "studentsSlice",
  initialState,
  reducers: {
    addStudent: (state, action) => {
      const data = {
        id: nanoid(),
        name: action.payload,
      };
      state.students.push(data);
    },
  },
});

export const { addStudent } = Slice.actions;
export default Slice.reducer;
