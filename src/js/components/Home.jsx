import React, {useState } from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Home = () => {
	const [input, setInput] = useState("");
	const [tasks, setTasks] = useState([]);

	const addTask = () => {
		if (input.trim() !== "") {
			setTasks([...tasks, input]);
			setInput("");
		}
	};




	return (
		<div className="text-center">
			<h1>todos</h1>
			<div>
				<input
					type="text"
					onChange={e => setInput(e.target.value)}
					value={input}
					placeholder="Add a new task"
					onKeyDown={e => { if (e.key === 'Enter') addTask(); }}
				/>
				<button onClick={addTask}>Add</button>
				<ul id="task-list" className="card">
					{tasks.map((task, idx) => (
						<li key={idx}>{task}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Home;