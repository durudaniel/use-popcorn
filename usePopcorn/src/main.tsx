import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
//import App from './App'
//import './index.css'
import StarRating from "./StarRating";
function Test({ defaultRating = 0 }) {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating color="blue" maxRating={7} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/*<App />*/}
    <StarRating
      maxRating={5}
      messages={["terrible", "bad", "okay", "good", "amazing"]}
    />
    <StarRating
      maxRating={10}
      color={"red"}
      size={30}
      className="test"
      defaultRating={3}
    />

    <Test />
  </React.StrictMode>
);
