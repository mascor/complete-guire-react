import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const app = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Massimo", age: 45 },
      { name: "Katia", age: 28 },
    ],
    otherState: "something else"
  });

  const [test] = useState('testo');
  const [test1] = useState('testo1');

  console.log(personsState);
  console.log(test);

  const switchNameHandler = () =>{
    setPersonsState({
      persons: [
        { name: "Massimo", age: 23 },
        { name: "Katia", age: 12 },
      ]
    })
  }
  
  return (
    <div className="App">
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      />
      otherState {personsState.otherState}
    </div>
  );
};

export default app;
