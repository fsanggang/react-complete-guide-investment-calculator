
import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Result({ initialInvestment, annualInvestment, expectedReturn, duration }) {
  const results = calculateInvestmentResults({
    initialInvestment: initialInvestment,
    annualInvestment: annualInvestment,
    expectedReturn: expectedReturn,
    duration: duration
  });

  {/* Don't know, don't care. Max says this is the calculation to use. */}
  const firstYearInitialInvestment = results[0] ? (results[0].valueEndOfYear - results[0].interest - results[0].annualInvestment) : 0;

  return(
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>

      <tbody>
        {results.map((result, index) => {
          {/* Don't know, don't care. Max says these are the calculation to use. */}
          const totalInterest = result.valueEndOfYear - result.annualInvestment * result.year - firstYearInitialInvestment;
          const investedCapital = result.valueEndOfYear - totalInterest;

          return <tr key={index}>
              <td>{result.year}</td>
              <td>{formatter.format(result.valueEndOfYear)}</td>
              <td>{formatter.format(result.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(investedCapital)}</td>
            </tr>
          })
        }
      </tbody>
    </table>
  )
}