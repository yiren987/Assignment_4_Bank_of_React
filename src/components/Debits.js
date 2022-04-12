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
            <a><Link to="/">Home</Link></a>
            <a><Link to="/userProfile">User Profile</Link></a> 
            <a><Link to="/login">Login</Link></a>
            <a><Link to="credits">Credits</Link></a>
            <a><Link to="debits">Debits</Link></a>
          </div>
    	   <h1>Debits</h1>
    	   {debitsView()}
           <form onSubmit={props.addDebit}>
             <label htmlFor="description">Description</label>
             <input type="text" name="description" />
             <label htmlFor="amount">Amount</label>
             <input type="number" step="0.01" name="amount" />
             <button type="submit">Add Debit</button>
           </form>
           <div>
             Balance: {props.accountBalance}
           </div>
        <Link to="/">Return to Home</Link>
    	</div>

    )
}
export default Debits;