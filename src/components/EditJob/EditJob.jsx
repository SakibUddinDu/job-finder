import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// // import { changeJob } from "../../features/jobs/jobsSlice";
// import { useLocation } from 'react-router-dom';
import { useNavigate, useParams } from "react-router-dom";
import { changeJob, selectJobById } from "./../../features/jobs/jobsSlice";

const EditJob = () => {
  const { id } = useParams();
  const navigate= useNavigate()
 
  const job = useSelector((state) => selectJobById(state, Number(id)));
  // const {id, title, type, salary, deadline } = job;
  // const [jobId, setJobId] = useState(job?.id);
  const [title, setTitle] = useState(job?.title);
  const [type, setType] = useState(job?.type);
  const [salary, setSalary] = useState(job?.salary);
  const [deadline, setDeadline] = useState(job?.deadline);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(changeJob({
      id,
     data:{
      title,
      type,
      salary,
      deadline
    }
    }))
    navigate('/')
  };

  return (
    <div className="lg:pl-[14rem] mt-[5.8125rem]">
      <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
        <h1 className="mb-10 text-center lws-section-title">Edit Job</h1>

        <div className="max-w-3xl mx-auto">
          <form className="space-y-6" onSubmit={handleSubmit} >
            <div className="fieldContainer">
              <label
                htmlFor="lws-JobTitle"
                className="text-sm font-medium text-slate-300"
              >
                Job Title
              </label>
              <select
                id="lws-JobTitle"
                name="lwsJobTitle"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              >
                <option defaultValue="" hidden selected>
                  Select Job
                </option>
                <option>Software Engineer</option>
                <option>Software Developer</option>
                <option>Full Stack Developer</option>
                <option>MERN Stack Developer</option>
                <option>DevOps Engineer</option>
                <option>QA Engineer</option>
                <option>Product Manager</option>
                <option>Social Media Manager</option>
                <option>Senior Executive</option>
                <option>Junior Executive</option>
                <option>Android App Developer</option>
                <option>IOS App Developer</option>
                <option>Frontend Developer</option>
                <option>Frontend Engineer</option>
              </select>
            </div>

            <div className="fieldContainer">
              <label htmlFor="lws-JobType">Job Type</label>
              <select
                id="lws-JobType"
                name="lwsJobType"
                required
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option defaultValue="" hidden selected>
                  Select Job Type
                </option>
                <option>Full Time</option>
                <option>Internship</option>
                <option>Remote</option>
              </select>
            </div>

            <div className="fieldContainer">
              <label htmlFor="lws-JobSalary">Salary</label>
              <div className="flex border rounded-md shadow-sm border-slate-600">
                <span className="input-tag">BDT</span>
                <input
                  type="number"
                  name="lwsJobSalary"
                  id="lws-JobSalary"
                  required
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                  className="!rounded-l-none !border-0"
                  placeholder="20,00,000"
                />
              </div>
            </div>

            <div className="fieldContainer">
              <label htmlFor="lws-JobDeadline">Deadline</label>
              <input
                type="date"
                name="lwsJobDeadline"
                id="lws-JobDeadline"
                required
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
              />
            </div>

            <div className="text-right">
              <button
                type="submit"
                id="lws-submit"
                className="cursor-pointer btn btn-primary w-fit"
              >
                Edit
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default EditJob;

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// // import { changeJob } from "../../features/jobs/jobsSlice";
// import { useLocation } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
// import { selectJobById } from './../../features/jobs/jobsSlice';

// const EditJob = () => {
//   const {id} =useParams()
//   console.log(id);

//   const job = useSelector((state) => selectJobById(state, Number(id)))

//   const dispatch = useDispatch();
//   const { editing } = useSelector((state) => state.jobs) || {};
// // const {id, title, type, salary, deadline } = location.state;
//   // const [id, setId] = useState(id);
//   const [title, setTitle] = useState(title);
//   const [type, setType] = useState(location.state.type);
//   const [salary, setSalary] = useState(location.state.salary);
//   const [deadline, setDeadline] = useState("");

//   useEffect(() => {
//     const { id, title, type, salary, deadline } = editing || {};
//     if (id) {
//       setTitle(title);
//       setType(type);
//       setSalary(salary);
//       setDeadline(deadline);
//     } else {
//       reset();
//     }
//   }, [editing]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // dispatch(
//     //   changeJob({
//     //     id: editing?.id,
//     //     data:{
//     //       title,
//     //     type,
//     //     salary,
//     //     deadline,
//     //     }
//     //   })
//     // );
//     // reset();
//   };
//   return (
//     <div className="lg:pl-[14rem] mt-[5.8125rem]">
//       <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
//         <h1 className="mb-10 text-center lws-section-title">Edit Job</h1>

//         <div className="max-w-3xl mx-auto">
//           <form className="space-y-6" onSubmit={handleSubmit}>
//             <div className="fieldContainer">
//               <label
//                 htmlFor="lws-JobTitle"
//                 className="text-sm font-medium text-slate-300"
//               >
//                 Job Title
//               </label>
//               <select
//                 id="lws-JobTitle"
//                 name="lwsJobTitle"
//                 required
//                 onChange={(e) => setTitle(e.target.value)}
//               >
//                 <option defaultValue="" hidden selected>
//                   Select Job
//                 </option>
//                 <option>Software Engineer</option>
//                 <option>Software Developer</option>
//                 <option>Full Stack Developer</option>
//                 <option>MERN Stack Developer</option>
//                 <option>DevOps Engineer</option>
//                 <option>QA Engineer</option>
//                 <option>Product Manager</option>
//                 <option>Social Media Manager</option>
//                 <option>Senior Executive</option>
//                 <option>Junior Executive</option>
//                 <option>Android App Developer</option>
//                 <option>IOS App Developer</option>
//                 <option>Frontend Developer</option>
//                 <option>Frontend Engineer</option>
//               </select>
//             </div>

//             <div className="fieldContainer">
//               <label htmlFor="lws-JobType">Job Type</label>
//               <select
//                 id="lws-JobType"
//                 name="lwsJobType"
//                 required
//                 onChange={(e) => setType(e.target.value)}
//               >
//                 <option defaultValue="" hidden selected>
//                   Select Job Type
//                 </option>
//                 <option>Full Time</option>
//                 <option>Internship</option>
//                 <option>Remote</option>
//               </select>
//             </div>

//             <div className="fieldContainer">
//               <label htmlFor="lws-JobSalary">Salary</label>
//               <div className="flex border rounded-md shadow-sm border-slate-600">
//                 <span className="input-tag">BDT</span>
//                 <input
//                   type="number"
//                   name="lwsJobSalary"
//                   id="lws-JobSalary"
//                   required
//                   onChange={(e) => setSalary(e.target.value)}
//                   className="!rounded-l-none !border-0"
//                   placeholder="20,00,000"
//                 />
//               </div>
//             </div>

//             <div className="fieldContainer">
//               <label htmlFor="lws-JobDeadline">Deadline</label>
//               <input
//                 type="date"
//                 name="lwsJobDeadline"
//                 id="lws-JobDeadline"
//                 required
//                 onChange={(e) => setDeadline(e.target.value)}
//               />
//             </div>

//             <div className="text-right">
//               <button
//                 type="submit"
//                 id="lws-submit"
//                 className="cursor-pointer btn btn-primary w-fit"
//               >
//                 Edit
//               </button>
//             </div>
//           </form>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default EditJob;


