// Import Assets
import fbIcon from './../../assets/images/fb-icon.png';
import twitterIcon from './../../assets/images/twitter-icon.png';
import linkedinIcon from './../../assets/images/in-icon.png';
import googleIcon from './../../assets/images/google-icon.png';

function SocialLinks() {
	return (
		<div className='icon_main'>
			<div className='row'>
				<div className='col-sm-12'>
					<div className='menu_text'>
						<ul>
							<li>
								<a href='#'>
									<img src={fbIcon} />
								</a>
							</li>
							<li>
								<a href='#'>
									<img src={twitterIcon} />
								</a>
							</li>
							<li>
								<a href='#'>
									<img src={linkedinIcon} />
								</a>
							</li>
							<li>
								<a href='#'>
									<img src={googleIcon} />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SocialLinks;
