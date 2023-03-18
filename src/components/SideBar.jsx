import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterByJobType } from '../features/jobs/jobsSlice';

const SideBar = () => {
    const dispatch = useDispatch()
    const [jobType, setJobType] = useState('')
    
    useEffect(() => {
      dispatch(filterByJobType(jobType))
    }, [dispatch, jobType])
    

    const handleClick=(e)=>{
        console.log(e.target)
        setJobType(e.target.value)
    }
    
    return (
        <div className="sidebar">
            <nav>
                <ul className="space-y-4">
                    <li>
                        <button onClick={handleClick}  value="" className="main-menu menu-active" id="lws-alljobs-menu">
                            <i className="fa-solid fa-briefcase"></i>
                            <span> All Available Jobs</span>
                        </button>
                        <ul className="space-y-6 lg:space-y-2 ">
                            <li>
                                <button  onClick={handleClick} className="sub-menu" id="lws-internship-menu" value="Internship">
                                    <i className="fa-solid fa-stop !text-[#FF5757]"></i>
                                    Internship
                                </button>
                            </li>
                            <li>
                                <button  onClick={handleClick} className="sub-menu" id="lws-fulltime-menu" value="Full Time">
                                    <i className="fa-solid fa-stop !text-[#FF8A00]"></i>
                                    Full Time
                                </button>
                            </li>
                            <li>
                                <button  onClick={handleClick}className="sub-menu" id="lws-remote-menu" value="Remote">
                                    <i className="fa-solid fa-stop !text-[#56E5C4]"></i>
                                    Remote
                                </button>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to={`/addNewJob/${1}`} className="main-menu" id="lws-addJob-menu">
                            <i className="fa-solid fa-file-circle-plus"></i>
                            <span>Add NewJob</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default SideBar;