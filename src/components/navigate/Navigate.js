import React from 'react';
//import {Navbar, Nav, NavItem, NavDropdown, DropdownButton, MenuItem, CollapsibleNav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigate.css'

class Navigate extends React.Component {
	constructor(props) {
		super(props);
		this.toggleNavbar = this.toggleNavbar.bind(this);
		this.state = {
			collapsed: true,
		};
	}
	toggleNavbar() {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	}
	render() {
		const collapsed = this.state.collapsed;
		const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
		const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
		return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark transparent-nav navegationclass">
			<div className="container">
				<Link className="navbar-brand" to="/">Actors & Movies</Link>
				<button onClick={this.toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className={`${classOne}`} id="navbarResponsive">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<Link className="nav-link" to="/movies">Movies</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/actors">Actors</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
		);
	}
}
export default Navigate;