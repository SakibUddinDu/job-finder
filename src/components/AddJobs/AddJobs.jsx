import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createJob } from "../../features/jobs/jobsSlice";

const AddJobs = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [salary, setSalary] = useState(0);
  const [deadline, setDeadline] = useState("");
 const navigate= useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createJob({
        title,
        type,
        salary,
        deadline,
      })
    );
    navigate('/')
  };
 


  return (
    <div className="lg:pl-[14rem] mt-[5.8125rem]">
      <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
        <h1 className="mb-10 text-center lws-section-title">Add New Job</h1>

        <div className="max-w-3xl mx-auto">
          <form className="space-y-6" onSubmit={handleSubmit}>
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
                onChange={(e) => setDeadline(e.target.value)}
              />
            </div>

            <div className="text-right">
              <button
                type="submit"
                id="lws-submit"
                className="cursor-pointer btn btn-primary w-fit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AddJobs;

// import React, { useEffect, useState } from "react";
// import { useDispatch } from 'react-redux';
// import { createJob } from "../../features/jobs/jobsSlice";
// import { useNavigate } from 'react-router-dom';
// ==================db.json o  change kora lagbe===========

// {
//   "jobs": [
//     {
//       "lwsJobTitle": "Product Manager",
//       "lwsJobType": "Remote",
//       "lwsJobSalary": "200000",
//       "lwsJobDeadline": "2023-03-18",
//       "id": 1
//     },
//     {
//       "lwsJobTitle": "MERN Stack Developer",
//       "lwsJobType": "Internship",
//       "lwsJobSalary": "20000",
//       "lwsJobDeadline": "2023-03-19",
//       "id": 2
//     },
//     {
//       "lwsJobTitle": "Software Developer",
//       "lwsJobType": "Full Time",
//       "lwsJobSalary": "200000",
//       "lwsJobDeadline": "2023-03-20",
//       "id": 3
//     }
//   ]
// }
// const AddJobs = () => {
//   const dispatch = useDispatch()
//   const [formData, setFormData] = useState({
//     lwsJobTitle: "",
//     lwsJobType: "",
//     lwsJobSalary: 0,
//     lwsJobDeadline: "",
//   });
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(createJob(formData))
//   };

//   return (
//     <div className="lg:pl-[14rem] mt-[5.8125rem]">
//       <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
//         <h1 className="mb-10 text-center lws-section-title">Add New Job</h1>

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
//                 onChange={handleChange}
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
//                 onChange={handleChange}
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
//                   onChange={handleChange}
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
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="text-right">
//               <button
//                 type="submit"
//                 id="lws-submit"
//                 className="cursor-pointer btn btn-primary w-fit"
//               >
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default AddJobs;
