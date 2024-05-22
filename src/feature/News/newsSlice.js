import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchNews } from "./newsService";

const initialState = {
  allNews : [],
  searchNews : [],
  isLoading : false,
  isError : false,
  isSuccess : false
}

const newsSlice = createSlice({
  name : "news",
  initialState ,
  reducers : {},
  extraReducers : builder => {
    builder
    .addCase(getNews.pending, (state,action)=>{
      state.isLoading = true
      state.isSuccess = false
      state.isError = false
    })
    .addCase(getNews.fulfilled, (state,action)=>{
      state.isLoading = false
      state.isSuccess = true
      state.isError = false
      state.allNews = action.payload
    })
    .addCase(getNews.rejected, (state,action) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
    })
  }
})


// Get News
export const getNews = createAsyncThunk("GET/NEWS", async(topic) => {
  try {
    return await fetchNews(topic);
  } catch (error) {
    console.log(error)
  }
})

export default newsSlice.reducer;