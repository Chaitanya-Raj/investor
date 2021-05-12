import React, { useState } from "react";
import Select from "react-select";
import "./App.css";

function App() {
  const [selected, setSelected] = useState(null);

  const [amount, setAmount] = useState("");

  const [principal, setPrincipal] = useState("");
  const [interest, setInterest] = useState("");
  const [time, setTime] = useState("");

  const options = [
    { value: "chocolate", label: "Simple Interest" },
    { value: "strawberry", label: "Compound Interest" },
    { value: "vanilla", label: "Present Value of Money" },
    { value: "vanilla", label: "Future Value of Money" },
  ];

  return (
    <div className="App">
      <header>
        <h1 className="main-heading">Investment Helper</h1>
      </header>

      <main>
        <Select
          value={selected}
          onChange={(event) => {
            console.log(event.target.value);
            setSelected();
          }}
          options={options}
        ></Select>
        <section>
          <form>
            <div className="float-label">
              <input
                type="text"
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
                type="text"
                value={interest}
                onChange={(event) => {
                  setInterest(event.target.value);
                }}
              />
              <label
                className={interest !== "" ? "active" : ""}
                htmlFor="Interest"
              >
                Interest
              </label>
            </div>
            <div className="float-label">
              <input
                type="text"
                value={time}
                onChange={(event) => {
                  setTime(event.target.value);
                }}
              />
              <label className={time !== "" ? "active" : ""} htmlFor="time">
                Time
              </label>
            </div>
          </form>
        </section>
        <p>
          {principal}
          {interest}
          {time}
        </p>
        <section></section>
        <section></section>
        <section></section>
      </main>

      <footer>
        <p>Made with ❤ by Chaitanya Raj</p>
      </footer>
    </div>
  );
}

export default App;
