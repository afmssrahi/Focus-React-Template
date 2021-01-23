// Import Local Components
import Nav from './../Nav';
import HeroArea from './../HeroArea';

function Header() {
	return (
		<header id='home' className='section'>
			<div className='header_main'>
				{/* Nav */}
				<Nav />
				{/* HeroArea */}
				<HeroArea />
			</div>
		</header>
	);
}

export default Header;
