// Import Assets
import img_1 from './../../assets/images/img-1.png';
import rightArow from './../../assets/images/right-aerow.png';

function AboutMe() {
	return (
		<div class='about_main layout_padding'>
			<div class='container'>
				<div class='row'>
					<div class='col-md-6'>
						<div class='images'>
							<img src={img_1} alt='' />
						</div>
					</div>
					<div class='col-md-6'>
						<div class='right_section_main'>
							<h1 class='dolar_tetx'>
								<strong>599.00* .com</strong>
							</h1>
							<h2 class='special_text'>
								Special Offer For Limited Time. 30% Discount On
								All Hosting Plans
							</h2>
							<p class='donec_text'>
								making it look like readable English. Many
								desktop publishing packages and web page editors
								now use Lorem Ipsum as their default model text,
								and a search for 'lorem ipsum' will uncover many
								web sites still
							</p>
							<div class='right_aero'>
								<img src={rightArow} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutMe;
