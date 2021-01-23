// Import Local Components
import FooterLinks from './../FooterLinks';

function Product() {
	return (
		<div>
			<h1 className='useful_text'>PRODUCT</h1>
			<div className='menu multi_column_menu'>
				<ul>
					{/* Footer Links */}
					<FooterLinks value='Webhosting' />
					<FooterLinks value='Reseler Hosting' />
					<FooterLinks value='VPS Hosting' />
					<FooterLinks value='Wordpress Hosting' />
					<FooterLinks value='Dedicated hosting' />
					<FooterLinks value='Windows' />
				</ul>
			</div>
		</div>
	);
}

export default Product;
