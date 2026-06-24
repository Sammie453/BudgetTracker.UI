import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Budget Tracker</h2>

      <ul className="nav-links">
        <li>
          <Link to="/">Dashboard</Link>
        </li>

        <li>
          <Link to="/transactions">
            Transactions
          </Link>
        </li>

        <li>
          <Link to="/budgets">
            Budgets
          </Link>
        </li>

        <li>
          <Link to="/reports">
            Reports
          </Link>
        </li>

        <li>
          <Link to="/notifications">
            Alerts
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;