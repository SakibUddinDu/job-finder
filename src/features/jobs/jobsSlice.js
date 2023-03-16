import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addJob, getJobs, editJob, deleteJob } from "./jobsApi";

const initialState = {
  jobsData: [],
  isLoading: false,
  isError: false,
  error: "",
};


// async Thunks- action creators - type and payload
export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async () => {
  const jobs = await getJobs();
  return jobs;
});

export const createJob = createAsyncThunk("jobs/createJob", async (formData)=>{
    console.log(formData)
    const job = await addJob(formData);
    return job;
  }
);

export const changeJob = createAsyncThunk(
  "jobs/changeJob",
  async (id, data) => {
    const job = await editJob(id, data);
    return job;
  }
);
export const removeJob = createAsyncThunk(
  "jobs/removeJob",
  async (id) => {
    const job = await deleteJob(id);
    return job;
  }
);

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.jobsData = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.jobsData = [];
        state.error = action.error?.message;
      })
      .addCase(createJob.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(createJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        // state.jobsData = state.jobsData.push(action.payload);
        state.jobsData.push(action.payload);
      })
      .addCase(createJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      })
      .addCase(changeJob.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(changeJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        const indexToUpdate = state.jobsData.findIndex((job)=> job.id === action.payload.id);
        state.jobsData[indexToUpdate] = action.payload;
      })
      .addCase(changeJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      })
      .addCase(removeJob.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(removeJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        
        state.jobsData = state.jobsData.filter((job)=> job.id !== action.meta.arg);
        // state.jobsData = state.jobsData.filter((job)=> job.id !== action.payload.id);
      })
      .addCase(removeJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      })
  },
});

export default jobsSlice.reducer;
