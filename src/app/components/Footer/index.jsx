// Import Assets
import mapIcon from './../../assets/images/map-icon.png';
import phoneIcon from './../../assets/images/phone-icon.png';
import emailIcon from './../../assets/images/email-icon.png';
import footerLogo from './../../assets/images/footer-logo.png';

// Import Local Components
import ContactInfo from './../ContactInfo';
import UsefulLinks from './../UsefulLinks';
import Product from './../Product';
import SocialLinks from './../SocialLinks';

function Footer() {
	return (
		<div className='contact_section_3'>
			<div className='container'>
				{/* Contact Details */}
				<div className='contact_taital'>
					<div className='row web'>
						<div className='col-sm-12 col-md-12 col-lg-4'>
							{/* Contact Information */}
							<ContactInfo
								img={mapIcon}
								text=' London 145 United Kingdom'
							/>
						</div>
						<div className='col-sm-6 col-md-6 col-lg-4'>
							{/* Contact Information */}
							<ContactInfo img={phoneIcon} text=' +7586656566' />
						</div>
						<div className='col-sm-6 col-md-6 col-lg-4'>
							{/* Contact Information */}
							<ContactInfo
								img={emailIcon}
								text=' demo@gmail.com'
							/>
						</div>
					</div>
				</div>
				<div className='contact_product'>
					<div className='row'>
						<div className='col-sm-6 col-md-6 col-lg-2'>
							{/* Footer Logo */}
							<div className='footer-logo'>
								<img src={footerLogo} />
							</div>
						</div>
						<div className='col-sm-6 col-md-6 col-lg-4'>
							{/* Useful Links */}
							<UsefulLinks />
						</div>
						<div className='col-sm-12 col-md-12 col-lg-6'>
							{/* Product */}
							<Product />
							{/* Subscribe Section */}
							<div className='input-group mb-3 margin-top-30'>
								<input
									type='text'
									className='form-control'
									placeholder='Enter you email'
								/>
								<div className='input-group-append'>
									<button
										className='subsrcibe_bt'
										type='Subscribe'
									>
										<a href='#'>SUBSCRIBE</a>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Social Links */}
				<SocialLinks />
			</div>
		</div>
	);
}
export default Footer;
