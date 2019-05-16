import React from 'react';

const Reservation = props => {
	const { data, deleteReservation } = props;
	return (
		<article>
			<h2>{data.name}</h2>
			<p>{data.date}</p>
			<p>{data.time}</p>
			<p>Numer of Guests: {data.number}</p>
			<button onClick={() => deleteReservation(data.id)}>Cancel</button>
		</article>
	);
};

export default Reservation;
