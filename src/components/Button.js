const Button = ({ color, text, onAdd }) => {
	return (
		<div>
			<button
				onClick={onAdd}
				style={{ backgroundColor: color }}
				className="btn"
			>
				{text}
			</button>
		</div>
	);
};

Button.defaultProps = {
	color: "green",
};

export default Button;
