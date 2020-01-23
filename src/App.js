import React from 'react';
import './App.css';
import Container from './Components/Container';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import StudentPagesDropDown from './Components/StudentPagesDropDown';

export default function App() {
	return (
		<Router>
			<div>
				<nav>
					<ul>
						<li>
							<Link to="/">Dashboard</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/users">Users</Link>
						</li>
					</ul>
				</nav>

				<Switch>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/users">
						<Users />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

function Home() {
	return (
		<div className="App">
			<header className="App-header"></header>

			<Container />
		</div>
	);
}

function About() {
	return (
		<div>
			<h2>Daaaaaaaan</h2>
			<p>Super gezellig dat je hier bent! je hebt me alleen net gemist.</p>
		</div>
	);
}

function Users() {
	return (
		<div>
			<h2>Users</h2>
			<ul>
				<StudentPagesDropDown />
			</ul>
		</div>
	);
}
