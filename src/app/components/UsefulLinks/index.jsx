// Import Local Components
import FooterLinks from './../FooterLinks';

function UsefulLinks() {
	return (
		<div>
			<h1 className='useful_text'>USEFUL LINK</h1>
			<div className='menu'>
				<ul>
					{/* Footer Links */}
					<FooterLinks value='Home' />
					<FooterLinks value='About' />
					<FooterLinks value='Services' />
					<FooterLinks value='Contact Us' />
				</ul>
			</div>
		</div>
	);
}

export default UsefulLinks;
