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
    <div class="content">
        <div class="navbar">
            <Link to="/">Home</Link>
            <Link to="/userProfile">User Profile</Link>
            <Link to="/login">Login</Link>
            <Link to="credits">Credits</Link>
            <Link to="debits">Debits</Link>
        </div>
        <h1>Credits</h1>
        <div class="box">
            <form class="credit_debit_form" onSubmit={props.addCredit}>
                <label htmlFor="description">Description</label>
                <input type="text" name="description" />
                <label htmlFor="amount">Amount</label>
                <input type="number" step="0.01" name="amount" />
                <button type="submit">Add Credit</button>
            </form>
            <br/>
            {creditsView()}
            <br/>
            <div class="balance">
                Balance: {props.accountBalance}
            </div>
        </div>
        
    </div>
    );
}
export default Credits;