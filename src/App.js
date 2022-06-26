import "./App.css";
// eslint-disable-next-line
import { About } from "./components/About";
import { NavBar } from "./components/NavBar";
import React, { useState } from "react";
import { TextForm } from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  // For Dark/Light mode setting
  const [mode, setMode] = useState("light");
  const [textMode, setTextMode] = useState("");
  const [btnText, setBtnText] = useState("Dark Mode");
  const [btnClass, setBtnClass] = useState("dark");
  // eslint-disable-next-line
  const [accordColor, setAccordColor] = useState("");

  // For utils button
  // eslint-disable-next-line
  const [utilColor, setUtilColor] = useState("primary");

  // For Alerts
  const [alert, setAlert] = useState(null);

  // Function for Dark/Light mode
  const toggleMode = () => {
    if (mode === "light" || btnText === "Dark Mode") {
      setMode("dark");
      setTextMode("text-light");
      setBtnText("Light Mode");
      setBtnClass("light");
      document.body.style.backgroundColor = "#042743";
      setAccordColor("bg-secondary");
      displayAlert("Dark mode has been activated !", "success", "light");
      setUtilColor("warning");
    } else if (mode === "dark" || btnText === "Light Mode") {
      setMode("light");
      setTextMode("");
      setBtnText("Dark Mode");
      setBtnClass("dark");
      document.body.style.backgroundColor = "white";
      setAccordColor("");
      displayAlert("Light mode has been activated !", "success", "secondary");
      setUtilColor("primary");
    }
  };

  // Function for Alerts
  const displayAlert = (alertText, alertType, alertColor) => {
    setAlert({
      text: alertText,
      type: alertType,
      color: alertColor,
    });

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
    <>
      <Router>
        <NavBar
          title="TextUtils"
          about="About"
          mode={mode}
          textMode={textMode}
          btnText={btnText}
          btnClass={btnClass}
          toggleHandler={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route
              exact
              path="/about"
              element={
                <About
                  mode={mode}
                  textMode={textMode}
                  accordColor={accordColor}
                />
              }
            />
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Your text here: "
                  mode={mode}
                  textMode={textMode}
                  utilColor={utilColor}
                  displayAlert={displayAlert}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
