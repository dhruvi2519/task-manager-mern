# Task Manager MERN 📝

A full-stack **Task Manager (Todo) application** built using the **MERN Stack**
(MongoDB, Express.js, React.js, Node.js).

This project demonstrates a clean separation of frontend and backend, RESTful APIs,
and basic CRUD operations, making it suitable for learning and interviews.

---

## 🚀 Features

- Create new tasks
- View all tasks
- Update existing tasks
- Delete tasks
- RESTful API with Express & Node.js
- MongoDB database using Mongoose
- React-based frontend UI
- Clean and scalable project structure

---

## 🛠️ Tech Stack

### Frontend
- React.js
- JavaScript
- HTML
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

---

## 📁 Project Structure

task-manager-mern/
│
├── task-manager-frontend/
│ ├── src/
│ ├── public/
│ ├── package.json
│
├── task-manager-backend/
│ ├── models/
│ ├── routes/
│ ├── validations/
│ ├── server.js
│ ├── package.json
│
└── .gitignore

yaml
Copy code

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/task-manager-mern.git
cd task-manager-mern
2️⃣ Backend Setup
bash
Copy code
cd task-manager-backend
npm install
Create a .env file in task-manager-backend:

env
Copy code
PORT=5000
MONGO_URI=your_mongodb_connection_string
Start backend server:

bash
Copy code
npm start
3️⃣ Frontend Setup
bash
Copy code
cd ../task-manager-frontend
npm install
npm start
🌐 API Endpoints (Sample)
GET /tasks – Get all tasks

POST /tasks – Create a new task

PUT /tasks/:id – Update a task

DELETE /tasks/:id – Delete a task

📌 Notes
node_modules and .env are ignored using .gitignore

Frontend and Backend are maintained in a single Git repository

This project is ideal for MERN beginners and interview demonstrations

👨‍💻 Author
Dhruvi Patel
MERN Stack Developer

📄 License
This project is created for learning and educational purposes.

yaml
Copy code

---

## ✅ LAST STEP (GitHub pe dikhane ke liye)

```bash
git add README.md
git commit -m "Add README file"
git push
