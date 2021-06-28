import React from 'react';
import Navbar from '../components/Navbar.js';
import header from '../images/badge-header.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm.js';
import './styles/BadgeNew.css';

class BadgeNew extends React.Component {
	render() {
		return (
			<div>
				<Navbar />
				<div className="BadgeNew__hero">
					<img src={header} alt="Logo" className="img-fluid" />
				</div>
				<div className="container">
					<div className="row">
						<div className="col">
							<Badge
								firstName="Mark"
								lastName="Cabanes"
								twitter="@cabanesdev"
								jobTitle="FullStack Developer"
							/>
						</div>
						<div className="col">
							<BadgeForm />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default BadgeNew;
