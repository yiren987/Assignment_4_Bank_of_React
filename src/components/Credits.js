// src/components/Credits.js
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

const Credits = (props) => {
    let creditsView = () => {
    const { credits } = props;
    return credits.map((credit) => {
        let date = credit.date.slice(0,10);
        return <li key={credit.id}>{credit.amount} {credit.description} {date}</li>
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
    <h1>Credits</h1>
    {creditsView()}
    <form onSubmit={props.addCredit}>
        <label htmlFor="description">Description</label>
        <input type="text" name="description" />
        <label htmlFor="amount">Amount</label>
        <input type="number" step="0.01" name="amount" />
        <button type="submit">Add Credit</button>
    </form>
    <div>
        Balance: {props.accountBalance}
    </div>
    <Link to="/">Return to Home</Link>
    </div>
    );
}
export default Credits;