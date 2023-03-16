import axios from "../../utils/axios";

export const getJobs = async() => {
    const {data}  = await axios.get('/jobs');
    return data;
}
export const addJob = async(formData) => {
    console.log(formData);
    const {data}  = await axios.post('/jobs', formData);
    return data;
}
export const editJob = async(id, formData) => {
    const {data}  = await axios.put(`/jobs/${id}`, formData);
    return data;
}
export const deleteJob = async(id) => {
    const {data}  = await axios.delete(`/jobs/${id}`);
    return data;
}
// import axios from "../../utils/axios";

// export const getJobs = async() => {
//     const {data}  = await axios.get('/jobs');
//     return data;
// }
// export const addJob = async(formData) => {
//     const {data}  = await axios.post('/jobs', formData);
//     return data;
// }
// export const editJob = async(id, formData) => {
//     const {data}  = await axios.put(`/jobs/${id}`, formData);
//     return data;
// }
// export const deleteJob = async(id) => {
//     const {data}  = await axios.delete(`/jobs/${id}`);
//     return data;
// }