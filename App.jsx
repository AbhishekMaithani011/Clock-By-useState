import React, { useState } from "react";

function App() {
  const time = new Date().toLocaleTimeString();

  const [Hour, setTime] = useState(time);

  function increaseTime() {
    setTime(new Date().toLocaleTimeString());
  }
  
  return (
    <div className="container">
      <h1>{Hour}</h1>
      <button onClick={setInterval(increaseTime, 1000)}>Get Time</button>
    </div>
  );
}

export default App;
