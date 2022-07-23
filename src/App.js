import "./App.css";
import React from "react";

function App() {
  const [myObject, setMyObject] = React.useState({
    name: "Ashok",
    age: "27",
    Degree: "B.Tech",
    RollNo: "3614282",
  });

  const handleClick = (e) => {
    setMyObject({...myObject, name: "Sujal Yadav", Degree: "M.Tech" });
  };

  return (
    <div className="App">
      <h1>
        Name: {myObject.name} & age: {myObject.age} & Degree: {myObject.Degree}{" "}
        & RollNo: {myObject.RollNo}
      </h1>
      <button className="btn" onClick={handleClick}>
        Update
      </button>
    </div>
  );
}

export default App;
