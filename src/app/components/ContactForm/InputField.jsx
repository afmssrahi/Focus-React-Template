function InputField({ type, placeholder, name }) {
	return (
		<div className='form-group'>
			<input
				type={type}
				className='email-bt'
				placeholder={placeholder}
				name={name}
			/>
		</div>
	);
}

export default InputField;
