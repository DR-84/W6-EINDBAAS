import React from 'react';
import './App.css';
import StudentPage from './Components/StudentsPage';
import Container from './Components/Container';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function App() {
	return (
		<Router>
			<div className="Router-Header">
				<nav className="Router-Nav">
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
		<div>
			<div className="App">
				<h2>Assignments</h2>
			</div>
			<header className="App-header"></header>

			<Container />
		</div>
	);
}

function About() {
	return (
		<div className="About">
			<h2>Daaaaaaaan</h2>
			<p>Super gezellig dat je hier bent! je hebt me alleen net gemist.</p>
		</div>
	);
}

function Users() {
	return (
		<div className="Users">
			<h2>Student Overview</h2>
			<StudentPage />
		</div>
	);
}
