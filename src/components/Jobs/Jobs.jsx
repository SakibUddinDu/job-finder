import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "./../../features/jobs/jobsSlice";
import JobsFilterBar from "./JobsFilterBar";
import SingleJob from "./SingleJob";

const Jobs = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.jobsData);
  const searchedText = useSelector((state) => state.jobs.searchedText);
  const salaryOrder = useSelector((state) => state.jobs.salaryOrder);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  const sortedJobs = [...jobs].sort((a, b) => {
    if (salaryOrder === "Salary (Low to High)") {
      console.log(a.salary, b.salary);
      return a.salary - b.salary;
    } else if (salaryOrder === "Salary (Low to High)") {
      return b.salary - a.salary;
    } else {
      console.log(salaryOrder);
    }
  });
  console.log(sortedJobs);

  return (
    <div className="lg:pl-[14rem]  mt-[5.8125rem]">
      <main className="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
        <JobsFilterBar></JobsFilterBar>
        <div className="jobs-list">
          {sortedJobs
            .filter((job) =>
              job.title.toLowerCase().includes(searchedText.toLowerCase())
            )
            .map((job) => (
              <SingleJob key={job.id} job={job}></SingleJob>
            ))}
          {/* {
            jobs
            .filter((job) =>job.title.toLowerCase().includes(searchedText.toLowerCase()))
            .map((job)=><SingleJob key={job.id} job={job}></SingleJob>)
           }  */}
        
        </div>
      </main>
    </div>
  );
};

export default Jobs;
