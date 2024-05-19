import { Link } from 'react-router-dom';
import './Footer.css';

export const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-wrapper">
				<ul className="footer-ul">
					<li className="footer-li">
						<Link className="footer-link">Community</Link>
					</li>

					<li className="footer-li">
						<Link className="footer-link">Privacy Policy</Link>
					</li>

					<li className="footer-li">
						<Link className="footer-link">Licenses</Link>
					</li>
				</ul>

				<div className="footer-copyright">
					<p>&copy; 2024 Marw</p>
				</div>
			</div>
		</footer>
	);
};
