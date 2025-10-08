import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import App from "./App";
import StarRating from "./StarRating";
 import "./index.css"; // Uncomment if you have styling

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
      <h2>Rate This Movie 🎬</h2>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Toggle between App and Test for quick testing */}
    <App />
    {/* <Test /> */}
  </React.StrictMode>
);
