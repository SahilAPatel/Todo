import Button from "./Button";

const Header = ({ onAdd, showAdd }) => {
	return (
		<header className="header">
			<h1>To-Do</h1>
			<Button
				color={showAdd ? "red" : "green"}
				text={showAdd ? "close" : "add"}
				onAdd={onAdd}
			/>
		</header>
	);
};

export default Header;
