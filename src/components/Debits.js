// src/components/Debits.js
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

const Debits = (props) => {
	let debitsView = () => {
        const { debits } = props;
        return debits.map((debit) => {
            let date = debit.date.slice(0,10);
            return <li key={debit.id}>{debit.amount} {debit.description} {date}</li>
        }) 
    }
    return (
    	<div>
         <div class="navbar">
            <Link to="/">Home</Link>
            <Link to="/userProfile">User Profile</Link>
            <Link to="/login">Login</Link>
            <Link to="credits">Credits</Link>
            <Link to="debits">Debits</Link>
          </div>
    	   <h1>Debits</h1>
    	   {debitsView()}
           <form class="credit_debit_form" onSubmit={props.addDebit}>
             <label htmlFor="description">Description</label>
             <input type="text" name="description" />
             <label htmlFor="amount">Amount</label>
             <input type="number" step="0.01" name="amount" />
             <button type="submit">Add Debit</button>
           </form>
           <div class="balance">
             Balance: {props.accountBalance}
           </div>
    	</div>

    )
}
export default Debits;