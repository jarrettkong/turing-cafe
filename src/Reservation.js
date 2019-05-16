import React from 'react';
import './Reservation.css';

const Reservation = props => {
	const { data, deleteReservation } = props;
	return (
		<article className="Reservation">
			<h2>{data.name}</h2>
			<p>{data.date}</p>
			<p>{data.time} pm</p>
			<p>Numer of Guests: {data.number}</p>
			<button onClick={() => deleteReservation(data.id)}>Cancel</button>
		</article>
	);
};

export default Reservation;
