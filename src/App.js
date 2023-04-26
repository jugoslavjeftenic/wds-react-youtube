import React from 'react';
import { Link } from "react-router-dom";

function App() {
	return (
		<>
			<h1>React Tutorial</h1>
			<p>
				<span>Web Dev Simplified </span>
				<a
					href='https://www.youtube.com/playlist?list=PLZlA0Gpn_vH_NT5zPVp18nGe_W9LqBDQK'
					target='blank'>
					tutorial playlist
				</a>
				<span>.</span>
			</p>
			<div>
				<h2>npm biblioteke</h2>
				<ul>
					<li>npm i</li>
					<li>npm i react-router-dom</li>
					<li>npm i axios</li>
				</ul>
			</div>
			<hr />
			<div>
				<h2>aplikacije</h2>
				<ol>
					<li><Link to="pokemon">Go to Pokemon</Link></li>
				</ol>
			</div>

		</>
	);
}

export default App;
