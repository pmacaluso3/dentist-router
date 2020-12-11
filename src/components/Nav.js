import { Link } from 'react-router-dom'

function Nav() {
  return(
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/procedures">Procedures</Link></li>
    </ul>
  )
}

export default Nav