import React from 'react';
import '../styles/bookings.css';
import carData from '../assets/dummy-data/booking-cars'
import Caritem from '../components/UI/Caritem';

function Bookings() {
  return (
    <>
    <div className="bookings">
      <div className="booking__wrapper">
        <h2 className="booking__title">
          Booking
        </h2>
        <div className="filter__widget-wrapper">
          <div className="filter__widget-01">
            <select>
              <option value="New">New</option>
              <option value="Popular">Popular</option>
              <option value="Upcoming"></option>
            </select>
          </div>

          <div className="filter__widget-01">
            <select>
              <option value="toyota">Toyota</option>
              <option value="sonata">Sonata</option>
              <option value="elentra">Elentra</option>
            </select>
          </div>
        </div>

        <div className="booking__car-list">
        {
          carData.map((item) => <Caritem item={item}/>)
        }
        </div>
      </div>
    </div>
    </>
  )
}

export default Bookings