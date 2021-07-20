import React from 'react';
import header from '../images/badge-header.svg';
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
					<img src={header} alt='Logo' className='img-fluid' />
				</div>
				<div className='container'>
					<div className='row'>
						<div className='col'>
							<Badge
								firstName={this.state.form.firstName}
								lastName={this.state.form.lastName}
								email={this.state.form.email}
								twitter={this.state.form.twitter}
								jobTitle={this.state.form.jobTitle}
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
