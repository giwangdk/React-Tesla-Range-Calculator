import React from 'react';
import PropTypes from 'prop-types'
import './TeslaStats.css'

function TeslaStats({cartstats}) {
    
    const listItems = cartstats.map((stat) => (
        <li key={stat.model}>
            <div className={`tesla-stats-icon tesla-stats-icon--${stat.model.toLowerCase()}`}>
                <p>{stat.miles}</p>
            </div>
        </li>
    ))
    
    return (
        <div className="tesla-stats">
            <ul>
                {listItems}
            </ul>
      </div>
  );
}

TeslaStats.propTypes = {
    cartstats : PropTypes.array
}

export default TeslaStats;
