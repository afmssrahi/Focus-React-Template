// Import Assets
import buildIcons from './../../assets/images/bulit-icon.png';

function FooterLinks({ value }) {
	return (
		<li className='footer_menu'>
			<a href='#'>
				<img src={buildIcons} className='footer_menu' />
				{value}
			</a>
		</li>
	);
}

export default FooterLinks;
