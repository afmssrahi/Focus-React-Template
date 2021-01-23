function CardForService({ active, img, title, description }) {
	return (
		<div class='col-sm-4'>
			<div class={active ? 'dedicated' : 'about_inner'}>
				<div class='icon'>
					<a href='#'>
						<img src={img} alt='' />
					</a>
				</div>
				<h2 class='totaly_text'>{title}</h2>
				<p class='making'>{description}</p>
			</div>
		</div>
	);
}

export default CardForService;
