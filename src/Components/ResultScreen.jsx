/* eslint-disable react/prop-types */
export default function ResultScreen({ mostSymbols , leastSymbols ,dispatch }) {
  const DISC_Symbols = {
    "Σ": "C",
    "Δ": "D",
    "I": "I",
    "X": "S",
    "-": "-",
  }

  const handleReset = () => {
    dispatch({ type: "Reset" });
  };

  return (
    <div className="result-screen">
      <div className="tables-wrapper">
        <SymbolTable title="MOST (Graph 1)"  symbols={mostSymbols} DISC_Symbols={DISC_Symbols} />
        <SymbolTable title="LEAST (Graph 2)" symbols={leastSymbols} DISC_Symbols={DISC_Symbols}/>
      </div>        
      <button className="btn btn-ui" onClick={handleReset}>
        Restart the test 👀
      </button>
    </div>
  );
}

function SymbolTable({ title, symbols , DISC_Symbols }) {
  return (
    <div className="symbol-table">
      <h3>{title}</h3>
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(symbols).map(([symbol, count]) => (
            <tr key={symbol}>
              <td>{symbol} ({DISC_Symbols[symbol]})</td>
              <td>{count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
