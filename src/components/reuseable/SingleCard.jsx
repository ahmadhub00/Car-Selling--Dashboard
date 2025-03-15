import React from 'react';
import '../../styles/dashboard.css';

function SingleCard(props) {
    const {title, totalNumber, icon} = props.item
  return (
    <div className="single__card">
            <div className="card__content">
              <h4>
                 {title}
              </h4>
              <span>
                {totalNumber}
              </span>
            </div>
            <span>
              <i class = {icon}></i>
            </span>
          </div>
  )
}

export default SingleCard