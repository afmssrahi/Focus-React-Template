function ReadMoreBtn({ btnStyle }) {
	return (
		<div className={btnStyle}>
			<button type='button' role='button' className='read_bt'>
				<a href='#'>Read More</a>
			</button>
		</div>
	);
}

export default ReadMoreBtn;
