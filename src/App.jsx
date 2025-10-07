import React from "react";
import { useState } from "react";
import "./App.css";

const App = () => {
  //state of our application
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  //Logic
  let calcBmi = (e) => {
    e.preventDefault();

    if (weight === "" || height === "" || weight <= 0 || height <= 0) {
      alert("Please enter valid weight and height values.");
    } else {
      let bmiValue = (weight / (height * height)) * 703;
      setBmi(bmiValue.toFixed(1));

      if (bmiValue < 18.5) {
        setMessage("You are underweight");
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        setMessage("You have a healthy weight");
      } else if (bmiValue >= 25 && bmiValue < 30) {
        setMessage("You are overweight");
      } else {
        setMessage("You are obese");
      }
    }
  };

  //reload
  let reload = () => {
    setWeight("");
    setHeight("");
    setBmi("");
    setMessage("");
  };

  return (
    <div className="App">
      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (ibs)</label>
            <input
              type="number"
              placeholder="Enter weight value"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Height (in)</label>
            <input
              type="number"
              placeholder="Enter height value"
              value={height}
              onChange={(event) => setHeight(event.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" type="button" onClick={reload}>
              Reload
            </button>
          </div>

          <div className="center">
            <h3>Your BMI is:{bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
