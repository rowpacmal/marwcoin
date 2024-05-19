import { NavLink } from 'react-router-dom';
import './Header.css';

export const Header = () => {
	return (
		<header className="header">
			<NavLink to="/" className="header-logo">
				<img
					src="./src/assets/Logo3.png"
					alt="Marw Logo"
					width="2408"
					height="1208"
				/>
			</NavLink>

			<nav className="header-nav">
				<ul className="header-nav-ul">
					<li className="header-nav-li">
						<NavLink to="/" className="header-nav-li-link">
							Home
						</NavLink>
					</li>
					<li className="header-nav-li">
						<NavLink to="/transaction" className="header-nav-li-link">
							Transaction
						</NavLink>
					</li>
					<li className="header-nav-li">
						<NavLink to="/blocks" className="header-nav-li-link">
							Blocks
						</NavLink>
					</li>
					<li className="header-nav-li">
						<NavLink to="/about" className="header-nav-li-link">
							About
						</NavLink>
					</li>
					<li className="header-nav-li">
						<NavLink to="/contact" className="header-nav-li-link">
							Contact
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};
