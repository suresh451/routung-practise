// Write your JS code here
// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav>
    <div className="header-div">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        className="header-img"
        alt="wave"
      />
      <ul className="ul-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
