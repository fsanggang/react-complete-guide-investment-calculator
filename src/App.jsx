import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Results";

function App() {
  const [ userInput, setUserInput ] = useState({
    initialInvestment: undefined,
    annualInvestment: undefined,
    expectedReturn: undefined,
    duration: undefined
  });

  function handleUserInputChange(event, inputIdentifier) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,                               // copy old userInput
        [inputIdentifier]: parseInt(event.target.value) // then overwrite the relevant key's value
      }
    });
  }

  return (
    <>
      <Header />

      <UserInput handleUserInputChange={handleUserInputChange} />

      <Result userInput={userInput} />
    </>
  )
}

export default App
