# Full-Stack Users CRUD Application

A modern, fully functional **CRUD application** built with **React (Vite)** for the frontend and **Node.js/Express + MongoDB** for the backend. Includes animations, professional styling, and responsive design.

---

## Features

* **Create, Read, Update, Delete** users
* Modern UI with **animated forms and list items**
* Responsive design for mobile and desktop
* Backend with **Node.js, Express, and Mongoose**
* Frontend built with **React + Vite**
* Smooth hover effects, gradients, and transitions
* Environment variable support for API URLs and MongoDB connection

---

## Technologies Used

* **Frontend:**

  * React 18
  * Vite
  * Axios
  * CSS animations

* **Backend:**

  * Node.js
  * Express.js
  * MongoDB Atlas (Mongoose ORM)
  * CORS

---

## Project Structure

```
fullStack-crud/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
└── frontend-vite/
    ├── index.html
    ├── package.json
    ├── vite.config.js
    └── src/
        ├── main.jsx
        ├── App.jsx
        ├── pages/
        ├── components/
        └── services/
```

---

## Getting Started

### 1. Backend Setup

1. Navigate to the backend folder:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install express mongoose dotenv cors
```

3. Create `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

4. Run the server:

```bash
node server.js
```

The backend API will run on `http://localhost:5000`.

---

### 2. Frontend Setup (React + Vite)

1. Navigate to the frontend folder:

```bash
cd frontend-vite
```

2. Install dependencies:

```bash
npm install
```

3. Create `.env` file:

```env
VITE_API_URL=http://localhost:5000
```

4. Run the frontend dev server:

```bash
npm run dev
```

Frontend will run on `http://localhost:5173`.

---

## Usage

1. Open the frontend URL in your browser.
2. Add new users using the form.
3. Edit or delete existing users from the list.
4. All changes are synced with MongoDB.

---

## Screenshots

*Add screenshots here of your animated, styled CRUD interface.*

---

## License

This project is open-source and available under the MIT License.

---

## Acknowledgements

* React: [https://reactjs.org/](https://reactjs.org/)
* Vite: [https://vitejs.dev/](https://vitejs.dev/)
* Express: [https://expressjs.com/](https://expressjs.com/)
* MongoDB & Mongoose: [https://www.mongodb.com/](https://www.mongodb.com/)
* CSS animation inspiration from modern UI/UX practices
