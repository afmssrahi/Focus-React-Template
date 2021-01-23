// Import Assets
import powerFullIcon from './../../assets/images/power-full-icon.png';
import optimisedIcon from './../../assets/images/optimised-icon.png';
import headPhoneIcon from './../../assets/images/headfone-icon.png';

// Import Local Components
import SectionHeader from './../SectionHeader';
import CardForAbout from './../CardForAbout';
import AboutMe from './../AboutMe';

function About() {
	return (
		<div>
			{/* Section Header / choose start */}
			<SectionHeader
				id='about'
				title={[
					'Why you should ',
					<span className='color'>choose us</span>,
				]}
				description={
					"Making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem 'ipsum will' uncover any web sites still"
				}
			/>
			{/* Section Header / choose start */}
			{/* about start */}
			<div className='choose_section_2'>
				<div className='container'>
					<div className='row'>
						{/* About Card */}
						<CardForAbout
							active
							img={powerFullIcon}
							title='Powerful Features'
							description={
								"making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still"
							}
						/>
						{/* About Card */}
						<CardForAbout
							img={optimisedIcon}
							title='Totaly Optimised'
							description={
								"making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still"
							}
						/>
						{/* About Card */}
						<CardForAbout
							img={headPhoneIcon}
							title='Worldwide Support'
							description={
								"making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still"
							}
						/>
					</div>
				</div>
			</div>
			{/* About Me */}
			<AboutMe />
			{/* about end */}
		</div>
	);
}

export default About;
