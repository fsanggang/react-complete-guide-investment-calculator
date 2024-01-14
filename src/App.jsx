import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Results";

function App() {
  const [ initialInvestment, setInitialInvestment ] = useState(0);
  const [ annualInvestment, setAnnualInvestment ] = useState(0);
  const [ expectedReturn, setExpectedReturn ] = useState(0);
  const [ duration, setDuration ] = useState(0);

  function handleInitialInvestmentChange(event) {
    setInitialInvestment(parseInt(event.target.value));
  }

  function handleAnnualInvestmentChange(event) {
    setAnnualInvestment(parseInt(event.target.value));
  }

  function handleExpectedReturnChange(event) {
    setExpectedReturn(parseInt(event.target.value));
  }

  function handleDurationChange(event) {
    setDuration(parseInt(event.target.value));
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

      <Result
        initialInvestment={initialInvestment}
        annualInvestment={annualInvestment}
        expectedReturn={expectedReturn}
        duration={duration}
        />
    </>
  )
}

export default App
