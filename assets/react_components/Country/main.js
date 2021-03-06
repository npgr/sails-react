/** This relative url is according main.js or main.min.js **/
//import "../assets/css/bootstrap.min.css"
import React from "react"
import ReactDOM from "react-dom"
import injectTapEventPlugin from 'react-tap-event-plugin';

import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

//import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'

import store from './CountryStore';
import List from './List'
import Add from './Add'

//import About from './About';
//import Dashboard from './Dashboard';

injectTapEventPlugin();

class Layout extends React.Component {
	
	constructor(props) {
		super()
		//console.log('Props: ', props)
	}
	
	goPage = this.goPage.bind(this)
 
	goPage(e) {
		let route = e.target.id
		if (route=='/') location.href = '/'
		this.props.history.push(route)
	}
	
	render() {
		const { goPage } = this
		
		const AppNavbar = (
		  <Navbar collapseOnSelect>
			<Navbar.Header>
			  <Navbar.Brand>
				<div onClick={goPage} id="/" >SAILS-REACT5</div>
			  </Navbar.Brand>
			  <Navbar.Toggle />
			</Navbar.Header>
			<Navbar.Collapse>
			  <Nav>
				<NavDropdown eventKey={1} title="Country" id="basic-nav-dropdown">
				  <MenuItem eventKey={1.1} onClick={goPage} id="/country/list">List</MenuItem>
				  <MenuItem eventKey={1.1} onClick={goPage} id="/country/list/add">Add</MenuItem>
				  <MenuItem eventKey={1.3} href="Portugal.html">Portugal</MenuItem>
				  <MenuItem divider />
				  <MenuItem eventKey={1.4} href="world.html">World</MenuItem>
				  <MenuItem eventKey={1.5} href="europe.html">Europe</MenuItem>
				  <MenuItem eventKey={1.6} href="america.html">America</MenuItem>
				</NavDropdown>
				<NavDropdown eventKey={2} title="Language" id="basic-nav-dropdown">
				  <MenuItem eventKey={2.1}>English</MenuItem>
				  <MenuItem eventKey={2.2}>Spanish</MenuItem>
				  <MenuItem eventKey={2.3}>Portuguese</MenuItem>
				</NavDropdown>
			  </Nav>
			  <Nav pullRight>
				<NavItem eventKey={5} onClick={goPage} id="/country/list/about">About</NavItem>
			  </Nav>
			</Navbar.Collapse>
		  </Navbar>
		);
		return(
			<div>
				{AppNavbar}
			</div>
		)
	}
}

class About extends React.Component {
	render() {
		return(
			<div>
				Componente About
			</div>
		)
	}
}

const history = createBrowserHistory()

ReactDOM.render(
	<Router >
	 <div>
		<Route path="/country/list" component={Layout}/> 
		<Route exact path="/country/list" component={List} />
		<Route path="/country/list/about" component={About} />
		<Route path="/country/list/add" component={Add} />
	 </div>
	</Router>
	
	, document.getElementById("app")
)

