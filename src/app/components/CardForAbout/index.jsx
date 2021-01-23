// Import Local Components
import ReadMoreBtn from './../ReadMoreBtn';

function CardForAbout({ active, img, title, description }) {
	return (
		<div className='col-sm-4'>
			<div className={active ? 'power_full' : 'power'}>
				<div className='icon'>
					<a href='#'>
						<img src={img} />
					</a>
				</div>
				<h2 className={active ? 'powerful_text' : 'totaly_text'}>
					{title}
				</h2>
				<p className={active ? 'making_tetx' : 'making'}>
					{description}
				</p>
			</div>
			{/* Read More Btn */}
			<ReadMoreBtn btnStyle='btn_main' />
		</div>
	);
}

export default CardForAbout;
