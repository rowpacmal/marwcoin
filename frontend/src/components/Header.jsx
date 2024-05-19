import { NavLink } from 'react-router-dom';

export const Header = () => {
	return (
		<header>
			<figure>
				<img
					src="./src/assets/Logo3.png"
					alt="Marw Logo"
					width="2408"
					height="1208"
				/>
			</figure>

			<nav>
				<ul>
					<li>
						<NavLink to="">Home</NavLink>
					</li>
					<li>
						<NavLink to="">Transaction</NavLink>
					</li>
					<li>
						<NavLink to="">Blocks</NavLink>
					</li>
					<li>
						<NavLink to="">About</NavLink>
					</li>
					<li>
						<NavLink to="">Contact</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};
