export default function UserInput({ onInitialInvestmentChange, onAnnualInvestmentChange, onExpectedReturnChange, onDurationChange }) {
  return (
    <div id="user-input">
      <div className="input-group">
        <div>
          <label>Initial investment</label>
          <input type="number" onChange={onInitialInvestmentChange} required></input>
        </div>

        <div>
          <label>Annual investment</label>
          <input type="number" onChange={onAnnualInvestmentChange} required></input>
        </div>
      </div>

      <br />

      <div className="input-group">
        <div>
          <label>Expected return</label>
          <input type="number" onChange={onExpectedReturnChange} required></input>
        </div>

        <div>
          <label>Duration</label>
          <input type="number" onChange={onDurationChange} required></input>
        </div>
      </div>
    </div>
  )
}