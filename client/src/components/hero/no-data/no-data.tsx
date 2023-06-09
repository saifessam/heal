import { useNavigate } from 'react-router-dom';
import Button from '../../button/button';
import { ReactComponent as NoDataSVG } from './../../../assets/svgs/illustrations/no-data.svg';
import './no-data.css';

function NoData() {
	const navigate = useNavigate();

	return (
		<section className='no-data-hero'>
			<article>
				<h1>Not doctors available</h1>
				<p>We are soory for that but it seems a bit quite here.<br />Be the first doctor here and start getting appointments</p>
				<Button condition='primary' action={() => navigate('/profile/doctors/sign-up')} label='Sign up now' />
			</article>
			<NoDataSVG />
		</section>
	);
}

export default NoData;