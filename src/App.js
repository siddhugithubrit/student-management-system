import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";
import "./App.css";
import React, { useEffect, useState } from "react";
import { getStudents, addStudent, deleteStudent, updateStudent } from "./api";

function App() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    course: "",
  });
  const [editId, setEditId] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    loadStudents();
  }, []);

  // ✅ FIXED
  const loadStudents = () => {
  setLoading(true);

  getStudents()
    .then((res) => setStudents(res.data))
    .catch((err) => console.error(err))
    .finally(() => setLoading(false));
};

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      deleteStudent(id)
        .then(() => {
          setMessage("Student deleted successfully ✅");
          setError("");
          loadStudents(); // ✅ correct
        })
        .catch(() => {
          setError("Error deleting student ❌");
          setMessage("");
        });
    }
  };

  const handleEdit = (student) => {
    setForm({
      name: student.name,
      email: student.email,
      course: student.course,
    });
    setEditId(student.id);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!form.name.trim()) {
      setError("Name is required");
      return false;
    }
    if (!form.email.includes("@")) {
      setError("Valid email is required");
      return false;
    }
    if (!form.course.trim()) {
      setError("Course is required");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    if (editId) {
      updateStudent(editId, form)
        .then(() => {
          setMessage("Student updated successfully ✅");
          setError("");
          loadStudents();
          setForm({ name: "", email: "", course: "" });
          setEditId(null);
        })
        .catch(() => {
          setError("Error updating student ❌");
          setMessage("");
        });
    } else {
      addStudent(form)
        .then(() => {
          setMessage("Student added successfully ✅");
          setError("");
          loadStudents();
          setForm({ name: "", email: "", course: "" });
        })
        .catch(() => {
          setError("Error adding student ❌");
          setMessage("");
        });
    }
  };

  // ✅ SAFE FILTER
  const filteredStudents = students.filter((s) => {
    const name = s.name ? s.name.toLowerCase() : "";
    const email = s.email ? s.email.toLowerCase() : "";
    const course = s.course ? s.course.toLowerCase() : "";

    return (
      name.includes(search.toLowerCase()) ||
      email.includes(search.toLowerCase()) ||
      course.includes(search.toLowerCase())
    );
  });

  // ✅ IMPORTANT: RETURN UI
  return (
    <div className="container">
      <h2>Student Management System</h2>
      {loading && <p>Loading data...</p>}
      {message && <p style={{ color: "green" }}>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* FORM */}
      <StudentForm
  form={form}
  handleChange={handleChange}
  handleSubmit={handleSubmit}
  editId={editId}
/>
      <br />

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* TABLE */}
      <StudentTable
  students={filteredStudents}
  handleEdit={handleEdit}
  handleDelete={handleDelete}
/>
    </div>
  );
}

export default App;