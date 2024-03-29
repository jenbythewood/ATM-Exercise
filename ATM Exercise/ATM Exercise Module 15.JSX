const ATMDeposit = ({ onChange, isDeposit }) => {
    const choice = ["Deposit", "Withdraw"];
    console.log(`ATM isDeposit: ${isDeposit}`);
    return (
      <label>
        <h3> {choice[Number(!isDeposit)]}</h3>
        <input type="number" className="atm-input" width="200" onChange={onChange} min="0"></input><br />
        <input type="submit" width="200" value="Submit"></input>
      </label>
    );
  };
  
  const Account = () => {
    let deposit = 0; 
    const [totalState, setTotalState] = React.useState(0);
    const [isDeposit, setIsDeposit] = React.useState(true);

    if (!isDeposit && deposit > totalState) { 
        alert('Insufficient Funds - Unable to Complete Transaction');
        return; 
      }


    let status = `Account Balance $ ${totalState} `;
    console.log(`Account Rendered with isDeposit: ${isDeposit}`);
    
    const handleChange = event => {
      console.log(`handleChange ${event.target.value}`);
      deposit = Number(event.target.value);
    };
    const handleSubmit = () => {
      let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
      setTotalState(newTotal);
      event.preventDefault();
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <h2 id="total">{status}</h2>
        <button onClick={() => setIsDeposit(true)}>Deposit</button>
        <button onClick={() => setIsDeposit(false)}>Cash Back</button>
        <ATMDeposit onChange={handleChange} isDeposit={isDeposit}></ATMDeposit>
      </form>
    );
  };
 
  ReactDOM.render(<Account />, document.getElementById("root"));
  
