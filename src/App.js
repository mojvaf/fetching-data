import React, { useState, useEffect } from "react";

import "./App.css";
import Header from "./components/Header";

function App() {
  const [results, setResults] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setResults(data.results);
      });
  }, []);

  return (
    <div>
      {results.map((result, index) => {
        return (
          <Header
            key={index}
            avatarUrl={result.picture.large}
            city={result.location.city}
            email={result.email}
            age={result.dob.age}
          />
        );
      })}
    </div>
  );
}

export default App;
