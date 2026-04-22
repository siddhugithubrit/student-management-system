# 🎓 Student Management System

A full-stack web application to manage student records, built using **React**, **Spring Boot**, and **MySQL**, and deployed on cloud platforms.

---

## 🚀 Live Demo

* 🌐 Frontend (Netlify): https://lovely-longma-fb36ed.netlify.app
* ⚙️ Backend API (Railway): https://student-backend-production-5590.up.railway.app/students

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Axios
* HTML, CSS

### Backend

* Spring Boot
* Spring Data JPA
* REST APIs

### Database

* MySQL (Railway Cloud)

### Deployment

* Netlify (Frontend)
* Railway (Backend & Database)

---

## ✨ Features

* ➕ Add Student
* 📄 View All Students
* 🌐 Live API Integration
* ☁️ Cloud Deployment
* 🔗 Frontend-Backend Connected

---

## 📸 Screenshots

(Add screenshots here after uploading images)

---

## 📂 Project Structure

### Backend (Spring Boot)

```
src/
 ├── controller/
 ├── model/
 ├── repository/
 └── StudentManagementSystemApplication.java
```

### Frontend (React)

```
src/
 ├── components/
 │    ├── StudentForm.js
 │    └── StudentTable.js
 ├── api.js
 └── App.js
```

---

## ⚙️ How to Run Locally

### 🔧 Backend

1. Open project in Eclipse / IntelliJ
2. Configure `application.properties`:

```
spring.datasource.url=jdbc:mysql://localhost:3306/student_db
spring.datasource.username=root
spring.datasource.password=yourpassword
```

3. Run:

```
StudentManagementSystemApplication.java
```

---

### 🎨 Frontend

```
cd student-frontend
npm install
npm start
```

---

## 🔗 API Endpoints

| Method | Endpoint  | Description      |
| ------ | --------- | ---------------- |
| GET    | /students | Get all students |
| POST   | /students | Add new student  |

---

## 🧠 Key Learnings

* Full-stack development (React + Spring Boot)
* REST API integration
* Database connectivity (MySQL)
* Deployment using cloud platforms
* Handling CORS issues

---

## 🚀 Future Improvements

* ✏️ Update Student
* ❌ Delete Student
* 🔍 Search functionality
* 🔐 Form validation
* 🎨 UI enhancements

---

## 👨‍💻 Author

**Siddhesh Mestry**

---

## ⭐ If you like this project

Give it a ⭐ on GitHub!
