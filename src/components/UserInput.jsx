export default function UserInput({ handleUserInputChange }) {
  return (
    <div id="user-input">
      <div className="input-group">
        <div>
          <label>Initial investment</label>
          <input type="number" onChange={(event) => handleUserInputChange(event, "initialInvestment")} required></input>
        </div>

        <div>
          <label>Annual investment</label>
          <input type="number" onChange={(event) => handleUserInputChange(event, "annualInvestment")} required></input>
        </div>
      </div>

      <br />

      <div className="input-group">
        <div>
          <label>Expected return</label>
          <input type="number" onChange={(event) => handleUserInputChange(event, "expectedReturn")} required></input>
        </div>

        <div>
          <label>Duration</label>
          <input type="number" onChange={(event) => handleUserInputChange(event, "duration")} required></input>
        </div>
      </div>
    </div>
  )
}