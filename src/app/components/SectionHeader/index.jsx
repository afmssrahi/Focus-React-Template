function SectionHeader({ id, title, description }) {
	return (
		<div id={id} className='choose_section'>
			<div className='container'>
				<div className='col-sm-12'>
					<h1 className='choose_text'>{title}</h1>
					<p className='lorem_text'>{description}</p>
				</div>
			</div>
		</div>
	);
}

export default SectionHeader;
