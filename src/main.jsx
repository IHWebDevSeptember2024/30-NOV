import { StrictMode as Ditto } from "react"; // esto lo he hecho para testing, normalmente no hace falta
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <Ditto>
    <Router>
      <App />
    </Router>
  </Ditto>
);
