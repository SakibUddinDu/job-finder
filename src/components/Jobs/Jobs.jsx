import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "./../../features/jobs/jobsSlice";
import JobsFilterBar from "./JobsFilterBar";
import SingleJob from "./SingleJob";

const Jobs = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.jobsData);
  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  return (
    <div className="lg:pl-[14rem]  mt-[5.8125rem]">
      <main className="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
        <JobsFilterBar></JobsFilterBar>
        <div className="jobs-list">
           {
            jobs.map((job)=><SingleJob key={job.id} job={job}></SingleJob>)
           } 
          
        </div>
      </main>
    </div>
  );
};

export default Jobs;
