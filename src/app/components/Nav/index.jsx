// Import Assets
import logo from './../../assets/images/logo.png';

function Nav() {
	return (
		<div class='header'>
			<div class='container'>
				<div class='row'>
					<div class='col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section'>
						<div class='full'>
							<div class='center-desk'>
								<div class='logo'>
									<a href='#home'>
										<img src={logo} />
									</a>
								</div>
							</div>
						</div>
					</div>
					<div class='col-xl-9 col-lg-9 col-md-9 col-sm-9'>
						<div class='menu-area'>
							<div class='limit-box'>
								<nav class='main-menu'>
									<ul class='menu-area-main'>
										<li>
											<a href='#home'>Home </a>
										</li>
										<li>
											<a href='#about'>About </a>
										</li>
										<li>
											<a href='#service'>Service </a>
										</li>
										<li>
											<a href='#testimonial'>
												Testimonial
											</a>
										</li>
										<li>
											<a href='#contact'>Contact Us </a>
										</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Nav;
