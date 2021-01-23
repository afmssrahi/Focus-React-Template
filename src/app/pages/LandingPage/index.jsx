// Import Local Components
import Header from './../../components/Header';
import About from './../../components/About';
import Service from './../../components/Service';
import ContactUs from './../../components/ContactUs';
import Footer from './../../components/Footer';
import CopyRight from './../../components/CopyRight';

function LandingPage() {
	return (
		<div>
			{/* Header Section */}
			<Header />
			{/* About Section */}
			<About />
			{/* Searvice Section */}
			<Service />
			{/* ContactUs Section */}
			<ContactUs />
			{/* Footer */}
			<Footer />
			{/* Copyright Section */}
			<CopyRight />
		</div>
	);
}

export default LandingPage;
