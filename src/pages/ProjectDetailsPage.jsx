// src/pages/ProjectDetailsPage.jsx

import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { handleDelete } from "../utils/apiCalls";

const API_URL = "https://project-management-api-4641927fee65.herokuapp.com";

function ProjectDetailsPage(props) {
  const [project, setProject] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();

  const { projectId } = useParams();

  console.log("ESTO ES EL PARAM: ", projectId);

  useEffect(() => {
    axios
      .get(`${API_URL}/projects/${projectId}?_embed=tasks`)
      .then((response) => setProject(response.data))
      .catch((error) => console.error(error));
  }, []);

  /*  function handleDelete() {
    axios
      .delete(`${API_URL}/projects/${projectId}`)
      .then((response) => {
        console.log(response);
        navigate("/projects");
      })
      .catch((error) => console.error(error));
  } */

  return (
    <div className="ProjectDetailsPage">
      {project && (
        <>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </>
      )}

      {project &&
        project.tasks && // tambien se podría poner project?.tasks
        project.tasks.map((task) => (
          <li className="TaskCard card" key={task.id}>
            <h3>{task.title}</h3>
            <h4>Description:</h4>
            <p>{task.description}</p>
          </li>
        ))}

      <Link to={`/projects/edit/${projectId}`}>
        <button>Edit project</button>
      </Link>
      <Link to="/projects">
        <button>Back to projects</button>
      </Link>
      <button
        style={{ backgroundColor: "red", color: "white" }}
        onClick={() => setShowConfirmation(true)}
      >
        Delete project
      </button>
      {showConfirmation && (
        <>
          <button
            onClick={() => setShowConfirmation(false)}
            style={{ backgroundColor: "gray", color: "white" }}
          >
            NO
          </button>
          <button
            onClick={() => handleDelete(projectId, navigate)}
            style={{ backgroundColor: "red", color: "white" }}
          >
            YES
          </button>
        </>
      )}
    </div>
  );
}

export default ProjectDetailsPage;
