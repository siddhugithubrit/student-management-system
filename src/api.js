import axios from "axios";

const API_URL = "https://student-backend-production-5590.up.railway.app/students";

// GET all students
export const getStudents = () => axios.get(API_URL);

// POST new student
export const addStudent = (student) => axios.post(API_URL, student);

// PUT update student
export const updateStudent = (id, student) =>
  axios.put(`${API_URL}/${id}`, student);

// DELETE student
export const deleteStudent = (id) =>
  axios.delete(`${API_URL}/${id}`);