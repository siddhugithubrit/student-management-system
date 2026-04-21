import React from "react";

function StudentForm({
  form,
  handleChange,
  handleSubmit,
  editId
}) {
  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="course"
        placeholder="Course"
        value={form.course}
        onChange={handleChange}
        required
      />

      <button type="submit" className={editId ? "update-btn" : "add-btn"}>
        {editId ? "Update Student" : "Add Student"}
      </button>
    </form>
  );
}

export default StudentForm;