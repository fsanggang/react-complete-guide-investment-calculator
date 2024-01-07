import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";

function App() {
  const [ initialInvestment, setInitialInvestment ] = useState(0);
  const [ annualInvestment, setAnnualInvestment ] = useState(0);
  const [ expectedReturn, setExpectedReturn ] = useState(0);
  const [ duration, setDuration ] = useState(0);

  function handleInitialInvestmentChange(event) {
    setInitialInvestment(event.target.value);
  }

  function handleAnnualInvestmentChange(event) {
    setAnnualInvestment(event.target.value);
  }

  function handleExpectedReturnChange(event) {
    setExpectedReturn(event.target.value);
  }

  function handleDurationChange(event) {
    setDuration(event.target.value);
  }

  return (
    <>
      <Header />

      <UserInput
        onInitialInvestmentChange={handleInitialInvestmentChange}
        onAnnualInvestmentChange={handleAnnualInvestmentChange}
        onExpectedReturnChange={handleExpectedReturnChange}
        onDurationChange={handleDurationChange}
        />
    </>
  )
}

export default App
