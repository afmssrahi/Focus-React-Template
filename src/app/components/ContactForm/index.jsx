// Import Assets
import img_2 from './../../assets/images/img-2.png';

// Import Local Components
import InputField from './InputField';

function ContactForm() {
	return (
		<div className='contact_section_2'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-6'>
						<div className='input_main'>
							<div className='container'>
								<form action='/action_page.php'>
									{/* InputField */}
									<InputField
										type='text'
										placeholder='Name'
										name='Name'
									/>
									{/* InputField */}
									<InputField
										type='email'
										placeholder='Email'
										name='Email'
									/>
									{/* InputField */}
									<InputField
										type='text'
										placeholder='Phone'
										name='Phone'
									/>

									<div className='form-group'>
										<textarea
											className='massage-bt'
											placeholder='Massage'
											rows='5'
											id='comment'
											name='text'
										></textarea>
									</div>
								</form>
							</div>
							<div className='send_btn'>
								<button type='button' className='main_bt'>
									<a href='#'>Send</a>
								</button>
							</div>
						</div>
					</div>
					<div className='col-md-6'>
						<div className='section_right'>
							<img src={img_2} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactForm;
