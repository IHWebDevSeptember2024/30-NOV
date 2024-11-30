// src/App.jsx

import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProjectListPage from "./pages/ProjectsListPage";
import CreateProjectPage from "./pages/CreateProjectPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import EditProjectPage from "./pages/EditProjectPage";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectListPage />} />
        <Route exact path="/projects/create" element={<CreateProjectPage />} />
        <Route
          exact
          path="/projects/:projectId"
          element={<ProjectDetailsPage />}
        />
        <Route
          exact
          path="/projects/edit/:projectId"
          element={<EditProjectPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
