import React, { Component } from 'react';
import './ReservationForm.css';

export class ReservationForm extends Component {
	state = {
		name: '',
		date: '',
		time: '',
		number: 1
	};

	handleChange = e => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.addReservation(this.state);
		this.setState({
			name: '',
			date: '',
			time: '',
			number: 1
		});
	};

	render() {
		return (
			<form className="ReservationForm" onSubmit={this.handleSubmit}>
				<input type="text" placeholder="Name" name="name" id="" onChange={this.handleChange} value={this.state.name} />
				<input type="text" placeholder="Date (mm/dd)" name="date" id="" onChange={this.handleChange} value={this.state.date} />
				<input type="text" placeholder="Time" name="time" id="" onChange={this.handleChange} value={this.state.time} />
				<input
					type="number"
					placeholder="Number of Guests"
					name="number"
					id=""
					onChange={this.handleChange}
					value={this.state.number}
				/>
				<input className='submit-btn' type="submit" value="Make Reservation" />
			</form>
		);
	}
}

export default ReservationForm;
