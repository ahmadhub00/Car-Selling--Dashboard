import React from 'react';
import '../styles/dashboard.css';
import SingleCard from '../components/reuseable/SingleCard';
import CarStatsChart from '../charts/CarStatsCharts';
import MileCharts from '../charts/MileChart';
import RecommendCarCard from '../components/UI/RecommendCarCard';
import recommendCarsData from '../assets/dummy-data/recommendCars'




const carObj = {
  title: 'Total Cars',
  totalNumber: 750,
  icon: "ri-police-car-line"
};
const tripObj = {
  title: 'Daily Trips',
  totalNumber: 1697,
  icon: "ri-steering-line"
};
const clientObj = {
  title: 'Client Annualy',
  totalNumber: '85k',
  icon: "ri-user-line"
};
const distanceObj = {
  title: 'Kilometers Daily',
  totalNumber: 2167,
  icon: "ri-timer-flash-line"
};

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard__wrapper">
        <div className="dashboard__cards">
          <SingleCard item={carObj}/>
          <SingleCard item={tripObj}/>
          <SingleCard item={clientObj}/>
          <SingleCard item={distanceObj}/>
        </div>
        <div className="statics">
        <div className="stats">
          <h3 className='stats__title'>Mile Statics</h3>
            
          <MileCharts/>

            </div>
        <div className="stats">
          <h3 className='stats__title'>Car Statics</h3>
            
          <CarStatsChart/>

            </div>
        </div>
        <div className="recommend__cars-wrapper">
         {
          recommendCarsData.map(item => <RecommendCarCard item={item} key={item.id}/>)
         }
        </div>
      </div>
    </div>
  )
}

export default Dashboard