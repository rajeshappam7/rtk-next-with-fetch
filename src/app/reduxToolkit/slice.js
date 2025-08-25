const { createSlice, nanoid, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  employees: [],
  isLoading: true,
  error: "",
  empApiData: [],
};

export const apiData = createAsyncThunk("apiData", async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  return data.json();
});

const Slice = createSlice({
  name: "addEmployeeSlice",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      console.log(action);
      const data = {
        id: nanoid(),
        name: action.payload,
      };
      state.employees.push(data);
    },
    removeEmployee: (state, action) => {
      const data = state.employees.filter((each) => each.id != action.payload);
      state.employees = data;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(apiData.pending, (state) => {
      (state.isLoading = false), (state.error = null);
    });
    builder.addCase(apiData.rejected, (state, action) => {
      (state.isLoading = false), (state.error = action.payload);
    });
    builder.addCase(apiData.fulfilled, (state, action) => {
      (state.isLoading = false), (state.error = null);
      state.empApiData = action.payload;
    });
  },
});

//Since Slice is combination of actions and reducers
export const { addEmployee, removeEmployee } = Slice.actions;

export default Slice.reducer;
