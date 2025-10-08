import React from "react";
<<<<<<< HEAD
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
=======
import { useState } from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";

import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
>>>>>>> f0172afd06df8881e852c06a75284453e911114e
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    {/* Toggle between App and Test for quick testing */}
    <App />
    {/* <Test /> */}
=======
    {/* <App /> */}
    <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <Test />
    <StarRating size={24} color="red" className="test" defaultRating={3} />
>>>>>>> f0172afd06df8881e852c06a75284453e911114e
  </React.StrictMode>
);
