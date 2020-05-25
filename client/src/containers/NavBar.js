import React from 'react'
import { Link } from '@reach/router'


const NavBar = () => {
	return (
			<div>
					<nav className="navbar navbar-light bg-light">
							<ul className="nav">
									<li className="nav-item">
											<Link className="nav-link" to='/' style={{ color: 'black' }}>Home</Link>
									</li>
									<li className="nav-item">
											<Link className="nav-link" to='/new' style={{ color: 'black' }}>Add</Link>
									</li>									
							</ul>
					</nav>
			</div>
	)
}

export default NavBar