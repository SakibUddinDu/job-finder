
import React from 'react';
import { Link } from 'react-router-dom';

const SingleJob = ({job}) => {
    // const {id, title, type, salary, deadline } =job;
    const {id, title, type, salary, deadline } =job;
    console.log(deadline)
    
    return (
        <div className="lws-single-job">
        <div className="flex-1 min-w-0">
            <h2 className="lws-title">{title}</h2>
            <div className="job-footers">
                <div className="lws-type">
                    <i className={`fa-solid fa-stop text-lg mr-1.5 ${type === 'Full Time' ? '!text-[#FF8A00]' : type === 'Internship' ? '!text-[#FF5757]' : type === 'Remote' ? '!text-[#56E5C4]' : ''}`}></i>
                    {type}
                </div>
                <div className="lws-salary">
                    <i className="fa-solid fa-bangladeshi-taka-sign text-slate-400 text-lg mr-1.5"></i>
                    BDT {salary}
                </div>
                <div className="lws-deadline">
                    <i className="fa-regular fa-calendar text-slate-400 text-lg mr-1.5"></i>
                    Closing on {deadline}
                </div>
            </div>
        </div>
        <div className="mt-5 flex lg:mt-0 lg:ml-4">
            <span className="hidden sm:block">
                <Link to={`/editJob/${id}`} type="button" className="lws-edit btn btn-primary">
                    <i className="fa-solid fa-pen text-gray-300 -ml-1 mr-2"></i>
                    Edit
                </Link>
            </span>

            <span className="sm:ml-3">
                <button type="button" className="lws-delete btn btn-danger ">
                    <i className="fa-solid fa-trash text-gray-300 -ml-1 mr-2"></i>
                    Delete
                </button>
            </span>
        </div>
    </div>
    );
};

export default SingleJob;

// import React from 'react';
// import { Link } from 'react-router-dom';

// const SingleJob = ({job}) => {
//     // const {id, title, type, salary, deadline } =job;
//     const {id, lwsJobTitle, lwsJobType, lwsJobSalary, lwsJobDeadline } =job;
//     // {
// //     "lwsJobTitle": "Software Engineer",
// //     "lwsJobType": "Internship",
// //     "lwsJobSalary": "10000",
// //     "lwsJobDeadline": "2023-03-16",
// //     "id": 8
// //   },
//     return (
//         <div className="lws-single-job">
//         <div className="flex-1 min-w-0">
//             <h2 className="lws-title">{lwsJobTitle}</h2>
//             <div className="job-footers">
//                 <div className="lws-type">
//                     <i className={`fa-solid fa-stop text-lg mr-1.5 ${lwsJobType === 'Full Time' ? '!text-[#FF8A00]' : lwsJobType === 'Internship' ? '!text-[#FF5757]' : lwsJobType === 'Remote' ? '!text-[#56E5C4]' : ''}`}></i>
//                     {lwsJobType}
//                 </div>
//                 <div className="lws-salary">
//                     <i className="fa-solid fa-bangladeshi-taka-sign text-slate-400 text-lg mr-1.5"></i>
//                     BDT {lwsJobSalary}
//                 </div>
//                 <div className="lws-deadline">
//                     <i className="fa-regular fa-calendar text-slate-400 text-lg mr-1.5"></i>
//                     Closing on {lwsJobDeadline}
//                 </div>
//             </div>
//         </div>
//         <div className="mt-5 flex lg:mt-0 lg:ml-4">
//             <span className="hidden sm:block">
//                 <Link to={`/editJob/${id}`} type="button" className="lws-edit btn btn-primary">
//                     <i className="fa-solid fa-pen text-gray-300 -ml-1 mr-2"></i>
//                     Edit
//                 </Link>
//             </span>

//             <span className="sm:ml-3">
//                 <button type="button" className="lws-delete btn btn-danger ">
//                     <i className="fa-solid fa-trash text-gray-300 -ml-1 mr-2"></i>
//                     Delete
//                 </button>
//             </span>
//         </div>
//     </div>
//     );
// };

// export default SingleJob;