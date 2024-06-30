// Write your JS code here
import {Link} from 'react-router-dom'

const Header = () => (
  <div className="Header">
    <ul className="nav-menu">
      <li>
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
      </li>
    </ul>
  </div>
)
export default Header
