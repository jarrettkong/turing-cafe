import React, { Component } from 'react';
import './App.css';
import ReservationContainer from './ReservationContainer';
import ReservationForm from './ReservationForm';

class App extends Component {
	state = {
		reservations: []
	};

	componentDidMount() {
		this.getExistingReservations();
	}

	getExistingReservations = async () => {
		const res = await fetch('http://localhost:3001/api/v1/reservations');
		const reservations = await res.json();
		this.setState({ reservations });
	};

	render() {
		return (
			<div className="App">
				<h1 className="app-title">Turing Cafe Reservations</h1>
				<div className="resy-form">
          <ReservationForm />
        </div>
				<div className="resy-container">
          <ReservationContainer reservations={this.state.reservations}/>
        </div>
			</div>
		);
	}
}

export default App;
