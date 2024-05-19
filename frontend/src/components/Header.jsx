import { Link, NavLink } from 'react-router-dom';
import './Header.css';

export const Header = () => {
	return (
		<header className="header">
			<div className="header-wrapper">
				<Link to="/" className="header-logo">
					<img
						src="./src/assets/Logo3.png"
						alt="Marw Logo"
						width="2408"
						height="1208"
					/>
				</Link>

				<nav className="header-nav">
					<ul className="header-nav-ul">
						<li className="header-nav-li">
							<NavLink to="/" className="header-nav-link">
								Home
							</NavLink>
						</li>

						<li className="header-nav-li">
							<NavLink to="/transaction" className="header-nav-link">
								Transaction
							</NavLink>
						</li>

						<li className="header-nav-li">
							<NavLink to="/blocks" className="header-nav-link">
								Blocks
							</NavLink>
						</li>

						<li className="header-nav-li">
							<NavLink to="/about" className="header-nav-link">
								About
							</NavLink>
						</li>

						<li className="header-nav-li">
							<NavLink to="/contact" className="header-nav-link">
								Contact
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};