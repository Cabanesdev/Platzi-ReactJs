import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Home.css';
import platziconfLogoImage from '../images/platziconf-logo.svg';
import astronautsImage from '../images/astronauts.svg';
class Home extends React.Component {
	render() {
		return (
			<div className='Home'>
				<div className='container'>
					<div className='left-container'>
						<img src={platziconfLogoImage} alt='' />
						<div className='info'>
							<h1>PRINT YOUR BADGES</h1>
							<p>The easiest way to mange your conference</p>
							<Link className='btn btn-primary full' to='/badges'>
								start
							</Link>
						</div>
					</div>
					<div className='right-container'>
						<img src={astronautsImage} alt='' />
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
