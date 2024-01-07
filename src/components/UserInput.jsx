export default function UserInput({ onInitialInvestmentChange, onAnnualInvestmentChange, onExpectedReturnChange, onDurationChange }) {
  return (
    <div id="user-input">
      <div className="input-group">
        <div>
          <label>Initial investment</label>
          <input type="number" onChange={onInitialInvestmentChange}></input>
        </div>

        <div>
          <label>Annual investment</label>
          <input type="number" onChange={onAnnualInvestmentChange}></input>
        </div>
      </div>

      <br />

      <div className="input-group">
        <div>
          <label>Expected return</label>
          <input type="number" onChange={onExpectedReturnChange}></input>
        </div>

        <div>
          <label>Duration</label>
          <input type="number" onChange={onDurationChange}></input>
        </div>
      </div>
    </div>
  )
}