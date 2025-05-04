import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React, { useState, useEffect } from "react";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
    showAlert(
      mode === "light"
        ? "Dark mode has been enabled"
        : "Light mode has been enabled",
      "success"
    );
    document.title = `TextUtils - ${mode === "light" ? "Dark" : "Light"} Mode`;
  };

  const [alert, setAlert] = useState(null);
  const showAlert = (message, alertType) => {
    setAlert({
      msg: message,
      type: alertType,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  //this runs on initial render
  //and on every update
  useEffect(() => {
    document.body.style.backgroundColor = mode === "light" ? "pink" : "grey";
    document.body.style.color = mode === "light" ? "purple" : "white";
  }, [mode]);

  return (
    <Router>
      <Navbar
        title="TextUtils"
        aboutText="About us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <div style={{ height: "50px" }}>
        <Alert alert={alert} />
      </div>
      <div className="container my-3">
        {
          <Routes>
            <Route path="/about" element={<About />} />
            <Route
              path="/"
              element={
                <TextForm
                  heading="Enter text to analyze below"
                  showAlert={showAlert}
                  mode={mode}
                />
              }
            />
          </Routes>
        }
      </div>
    </Router>
  );
}

export default App;
