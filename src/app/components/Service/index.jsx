// Import Assets
import icon_1 from './../../assets/images/icon-1.png';
import icon_2 from './../../assets/images/icon-2.png';
import icon_3 from './../../assets/images/icon-3.png';
import icon_4 from './../../assets/images/icon-4.png';
import icon_5 from './../../assets/images/icon-5.png';
import icon_6 from './../../assets/images/icon-6.png';

// Import Local Components
import SectionHeader from './../SectionHeader';
import CardForService from './../CardForService';
import ReadMoreBtn from './../ReadMoreBtn';

function Service() {
	return (
		<div>
			{/* Section Header */}
			<SectionHeader
				id='service'
				title={['Our ', <span className='color'>Service</span>]}
				description='Lorem ipsum dolor sittem ametamngcing elit, per sed do eiusmoad
                teimpor sittem elit inuning ut sed.'
			/>
			{/* Service Card 1st Row */}
			<div class='choose_section_2'>
				<div class='container'>
					<div class='row'>
						{/* Service Card */}
						<CardForService
							img={icon_1}
							title='Shared Hosting'
							description='Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.'
						/>
						{/* Service Card */}
						<CardForService
							active
							img={icon_2}
							title='Dedicated Hosting'
							description='Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.'
						/>
						{/* Service Card */}
						<CardForService
							img={icon_3}
							title='Domain Registration'
							description='Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.'
						/>
					</div>
				</div>
			</div>
			{/* Service Card 2nd Row */}
			<div class='choose_section_2'>
				<div class='container'>
					<div class='row'>
						{/* Service Card */}
						<CardForService
							img={icon_4}
							title='Shared Hosting'
							description='Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.'
						/>
						{/* Service Card */}
						<CardForService
							img={icon_5}
							title='Dedicated Hosting'
							description='Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.'
						/>
						{/* Service Card */}
						<CardForService
							img={icon_6}
							title='Domain Registration'
							description='Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.'
						/>
						{/* ReadMoreBtn */}
						<ReadMoreBtn btnStyle='bt_main' />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Service;
