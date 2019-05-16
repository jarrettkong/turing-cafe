import React, { Component } from 'react';

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
		console.log(this.state);
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input type="text" placeholder="Name" name="name" id="" onChange={this.handleChange} value={this.state.name} />
				<input type="text" placeholder="Date" name="date" id="" onChange={this.handleChange} value={this.state.date} />
				<input type="text" placeholder="Time" name="time" id="" onChange={this.handleChange} value={this.state.time} />
				<input
					type="number"
					placeholder="Number of Guests"
					name="number"
					id=""
					onChange={this.handleChange}
					value={this.state.number}
				/>
				<input type="submit" value="Make Reservation" />
			</form>
		);
	}
}

export default ReservationForm;
