import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
	const [showAddTask, setShowAddTask] = useState(false);

	const [tasks, setTasks] = useState([
		{
			id: 1,
			text: "uno",
			day: "Feb 5th at 2:30pm",
			reminder: true,
		},
		{
			id: 2,
			text: "dos",
			day: "Feb 2th at 2:30pm",
			reminder: false,
		},
		{
			id: 3,
			text: "tres",
			day: "Feb 21th at 2:30pm",
			reminder: true,
		},
	]);

	//Add Task
	const addTask = (task) => {
		const id = Math.floor(Math.random() * 10000) + 1;
		const newTask = { id, ...task };
		setTasks([...tasks, newTask]);
	};

	//Delete Task
	const deleteTask = (id) => {
		console.log("delete", id);
		setTasks(tasks.filter((task) => task.id !== id));
	};

	//Toggle Reminder
	const toggleRemidner = (id) => {
		console.log("toggle", id);
		setTasks(
			tasks.map((task) =>
				task.id === id ? { ...task, reminder: !task.reminder } : task
			)
		);
	};

	return (
		<div className="container">
			<Header
				onAdd={() => setShowAddTask(!showAddTask)}
				showAdd={showAddTask}
			/>
			{showAddTask && <AddTask onAdd={addTask} />}

			{tasks.length > 0 ? (
				<Tasks
					tasks={tasks}
					onDelete={deleteTask}
					onToggle={toggleRemidner}
				/>
			) : (
				"No Tasks... yet"
			)}
		</div>
	);
}

export default App;
