// Import Assets
import woofer from './../../assets/images/woofer.png';

function HeroArea() {
	return (
		<section>
			<div class='bannen_inner'>
				<div class='container'>
					<div class='row marginii'>
						<div class='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
							<div class='taital_main'></div>
							<h1 class='web_text'>
								<strong>Unlimited Web Hosting</strong>
							</h1>
							<p class='donec_text'>
								Donec nec justo eget felis facilisis fermentum.
								Aliquam porttitor mauris sit amet orci. Aenean
								dignissim pellentesque felis.Donec nec justo
								eget felis facilisis fermentum. Aliquam
								porttitor mauris sit amet orci. Aenean dignissim
								pellentesque felis.
							</p>
							<a class='get_bg' href='#' role='button'>
								Get Started
							</a>
							<a
								class='btn btn-lg btn-dark'
								href='about.html'
								role='button'
							>
								Contact Us
							</a>
						</div>
						<div class='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
							<div class='img-box'>
								<figure>
									<img src={woofer} alt='img' />
								</figure>
							</div>
						</div>
					</div>
					<div class='emaim-bt'>
						<div class='col-md-9 margin-0'>
							<div class='input-group mb-3 margin-top-20'>
								<input
									type='text'
									class='form-control'
									placeholder='Enter domain name here'
								/>
								<div class='input-group-append'>
									<button class='search_bt' type='Subscribe'>
										<a href='#'>Search</a>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default HeroArea;
