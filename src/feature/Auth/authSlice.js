import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

// {
//   _id : "1",
//   name : "Riya",
//   email : "riya@gmail.com",
//   token : "svfakjhjliaeowaur",
// }

const userExist = JSON.parse(localStorage.getItem('user'))

const initialState = {
  user: userExist ? userExist : null,
  isLoading: false,
  isSuccess: false,
  isError: true,
  message: "Error Message Here",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

    // Register
      .addCase(registerUser.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.message = ""
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })

    //  Logout
      .addCase(logOutUser.fulfilled, (state, action) => {
        state.user = null
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = false;
        state.message = "";
      })


       // Login
       .addCase(loginUser.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.message = ""
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })


  },
});

// register User

export const registerUser = createAsyncThunk(
  "REGISTER/USER",
  async(formData, thunkAPI) => {
    console.log(formData)
   try {
    return await authService.register(formData);
   } catch (error) {
    const message = error.response.data.message
    return thunkAPI.rejectWithValue(message);
   }
  }
);


// LogOut User

export const logOutUser =  createAsyncThunk("LOGOUT/USER",  async() => {
  localStorage.removeItem('user');
})

// Login User

export const loginUser = createAsyncThunk("LOGIN/USER" , async(formData, thunkAPI) => {
  try {
    return await authService.login(formData);
  } catch (error) {
    const message = error.response.data.message
    return thunkAPI.rejectWithValue(message);
  }
})


export default authSlice.reducer;
