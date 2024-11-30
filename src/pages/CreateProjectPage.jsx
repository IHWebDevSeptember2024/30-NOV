// src/pages/CreateProjectPage.jsx

import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "https://project-management-api-4641927fee65.herokuapp.com";

function CreateProjectPage(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState();

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const newProject = {
      title,
      description,
    };

    axios
      .post(`${API_URL}/projects`, newProject)
      .then((response) => {
        console.log(response);
        setMessage("Your project has been created 😁");
        setTitle("");
        setDescription("");
        setTimeout(() => {
          setMessage("");
          navigate("/projects");
        }, 3000);
      })
      .catch((error) => {
        console.error(error);
        setMessage("There was an error, try again later 🥺");
      });
  }

  /*  
  // BUEN REFACTOR! Pero tenemos un problema si queremos usar el navigate("/projects")
  useEffect(() => {
    setTimeout(() => {
      setMessage("");
    }, 3000);
  }, [message]);
 */
  return (
    <div className="CreateProjectPage">
      <h3>Add Project</h3>
      {!message ? (
        <form onSubmit={handleSubmit}>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label>Description:</label>
          <textarea
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button type="submit">Submit</button>
        </form>
      ) : (
        <p>{message}</p>
      )}
    </div>
  );
}

export default CreateProjectPage;
