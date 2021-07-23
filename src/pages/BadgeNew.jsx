import React from 'react';
import header from '../images/platziconf-logo.svg';
import Badge from '../components/Badge.jsx';
import BadgeForm from '../components/BadgeForm.jsx';
import './styles/BadgeNew.css';

class BadgeNew extends React.Component {
	state = {
		form: {
			firstName: '',
			lastName: '',
			email: '',
			jobTitle: '',
			twitter: '',
		},
	};

	handleChange = (e) => {
		const { form } = this.state;

		console.log(form);

		this.setState({
			form: {
				...form,
				[e.target.name]: e.target.value,
			},
		});
	};

	render() {
		return (
			<React.Fragment>
				<div className='BadgeNew__hero'>
					<img
						src={header}
						alt='Logo'
						className='BadgeNew__hero-image img-fluid'
					/>
				</div>
				<div className='container'>
					<div className='row'>
						<div className='col'>
							<Badge
								firstName={this.state.form.firstName || 'First_name'}
								lastName={this.state.form.lastName || 'Last_name'}
								email={this.state.form.email || 'Email'}
								twitter={this.state.form.twitter || 'Twitter'}
								jobTitle={this.state.form.jobTitle || 'Job_Tittle'}
							/>
						</div>
						<div className='col'>
							<BadgeForm
								onChange={this.handleChange}
								formValues={this.state.form}
							/>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
export default BadgeNew;
