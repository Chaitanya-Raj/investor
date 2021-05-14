import React, { useState } from "react";
import Select from "react-select";
import "./App.css";

function App() {
  const [selected, setSelected] = useState("");

  const [amount, setAmount] = useState("");

  const [principal, setPrincipal] = useState("");
  const [interest, setInterest] = useState("");
  const [time, setTime] = useState("");

  const options = [
    { value: "si", label: "Simple Interest" },
    { value: "ci", label: "Compound Interest" },
    { value: "pvm", label: "Present Value of Money", isdisabled: true },
    { value: "fvm", label: "Future Value of Money", isdisabled: true },
  ];

  const simpleInterest = () => {
    setAmount(
      parseFloat(principal) + parseFloat(principal * (interest / 100) * time)
    );
  };

  const compoundInterest = () => {
    setAmount(principal * (1 + interest / 100) ** time);
  };

  const handleInterest = (event) => {
    if (selected.value === "si") simpleInterest();
    else compoundInterest();
    event.preventDefault();
  };

  return (
    <div className="App">
      <header>
        <h1 className="main-heading">Investment Helper</h1>
      </header>

      <main>
        <Select
          isOptionDisabled={(option) => option.isdisabled}
          className="select"
          value={selected}
          onChange={(sel) => {
            console.log(sel);
            setAmount("");
            setPrincipal("");
            setInterest("");
            setTime("");
            setSelected(sel);
          }}
          options={options}
        ></Select>
        {(selected.value === "si" || selected.value === "ci") && (
          <section>
            <form onSubmit={handleInterest}>
              <div className="float-label">
                <input
                  type="tel"
                  value={principal}
                  onChange={(event) => {
                    setPrincipal(event.target.value);
                  }}
                />
                <label
                  className={principal !== "" ? "active" : ""}
                  htmlFor="principal"
                >
                  Principal
                </label>
              </div>
              <div className="float-label">
                <input
                  type="tel"
                  value={interest}
                  onChange={(event) => {
                    setInterest(event.target.value);
                  }}
                />
                <label
                  className={interest !== "" ? "active" : ""}
                  htmlFor="Interest"
                >
                  Return
                </label>
              </div>
              <div className="float-label">
                <input
                  type="tel"
                  value={time}
                  onChange={(event) => {
                    setTime(event.target.value);
                  }}
                />
                <label className={time !== "" ? "active" : ""} htmlFor="time">
                  Time
                </label>
              </div>
              <button disabled={!principal || !interest || !time}>
                Calculate
              </button>
            </form>
          </section>
        )}
        {selected && (
          <div className="float-label amount">
            <input disabled type="text" value={amount} />
            <label className={amount !== "" ? "active" : ""} htmlFor="Interest">
              Amount
            </label>
          </div>
        )}
      </main>

      <footer>
        <p>Made with ❤ by Chaitanya Raj</p>
      </footer>
    </div>
  );
}

export default App;
