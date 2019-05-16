import React from 'react'
import Reservation from './Reservation';

const ReservationContainer = props => {
  const reservations = props.reservations.map(res => <Reservation key={res.id} data={res}/>)
  return (
    <section>
      {reservations};
    </section>
  )
}

export default ReservationContainer;