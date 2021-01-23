// Import Local Components
import SectionHeader from './../SectionHeader';
import ContactForm from './../ContactForm';

function ContactUs() {
	return (
		<div>
			{/* Section Header */}
			<SectionHeader
				id='about'
				title={['Request A ', <span className='color'>Call Back</span>]}
				description='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour'
			/>
			{/* Contact Form*/}
			<ContactForm />
		</div>
	);
}

export default ContactUs;
