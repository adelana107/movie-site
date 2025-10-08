import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import App from "./App";
import StarRating from "./StarRating";
import "./index.css"; // Include your styles

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
    {/* You can toggle between App and Test for testing */}
    <App />
    {/* <Test /> */}

    {/* Example standalone StarRating components */}
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    /> */}
    {/* <StarRating size={24} color="red" className="test" defaultRating={3} /> */}
  </React.StrictMode>
);
