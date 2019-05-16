import React from 'react';
import Reservation from './Reservation';
import './ReservationContainer.css';

const ReservationContainer = props => {
	const reservations = props.reservations.map(res => (
		<Reservation key={res.id} data={res} deleteReservation={props.deleteReservation} />
	));
	return <section className="ReservationContainer">{reservations}</section>;
};

export default ReservationContainer;
