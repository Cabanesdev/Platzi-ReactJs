import React from 'react';
import { Link } from 'react-router-dom';

import BadgesList from '../components/BadgesList';

import './styles/Badges.css';
import confLogo from '../images/badge-header.svg';
import data from '../data/data.json';
class Badges extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className='Badges'>
					<div className='Badges__hero'>
						<div className='Badges__container'>
							<img
								className='Badges_conf-logo'
								src={confLogo}
								alt='Conf Logo'
							/>
						</div>
					</div>
				</div>

				<div className='Badge__container'>
					<div className='Badges__buttons'>
						<Link to='/badges/new' className='btn btn-primary'>
							New Badge
						</Link>
					</div>
					<BadgesList badges={data} />
				</div>
			</React.Fragment>
		);
	}
}

export default Badges;
