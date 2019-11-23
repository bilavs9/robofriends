import React,{ Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';
// import { robots } from './robots';

//we are using state in react...

class App extends Component{

	constructor(){
		super();
		this.state = {
			robots:[],
	   		searchField:'',
		}
	 }

	 componentDidMount() {
	 	//fake rest api .....
	 	fetch('https://jsonplaceholder.typicode.com/users')
	 	.then(response => response.json())
	 	.then(users => this.setState({robots:users}) )
	 }

	 //except the react method if you include another method use arrow functions....
	 onSearchChange = (event) =>{
	 	this.setState({ searchField:event.target.value });
	 }


	render(){
		const {robots,searchField} = this.state;
		const filteredRobots = robots.filter(robot => {
			//checking if the name entered in search filed matches with robot names...
	 		return robot.name.toLowerCase().includes(searchField.toLowerCase());
	 	})

	 	return !robots.length ?
	 	   <h1>Loading!!!</h1>:
       	 (
			<div className='tc'>
			<h1 className="f1">RoboFriends</h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<Scroll>
			<ErrorBoundary>
			<CardList robots = {filteredRobots}/>
			</ErrorBoundary>
			</Scroll>
			</div>
		);
	  }

}

export default App;