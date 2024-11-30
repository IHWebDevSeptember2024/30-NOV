import axios from "axios";

const API_URL = "https://project-management-api-4641927fee65.herokuapp.com";

function handleDelete(projectId, navigate) {

  axios
    .delete(`${API_URL}/projects/${projectId}`)
    .then((response) => {
      console.log(response);
      navigate("/projects"); 
    })
    .catch((error) => console.error(error));
}

export { handleDelete };
