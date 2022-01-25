import React from 'react';
import PropTypes from 'prop-types';
import './TeslaCounter.css'

function TeslaCounter({currentValue, initValues, increment, decrement}) {
    return (
        <div className="tesla-counter">
            <div className="tesla-counter__title">
                <div className="tesla-counter__container cf">
                    <div className="tesla-counter__item">
                        <p className="tesla-counter__number">
                            {currentValue}
                            <span>{ initValues.unit}</span>
                        </p>
                        <div className="tesla-counter__controls">
                            <button
                                onClick={(e) => increment(e, initValues.title)}
                                disabled={currentValue>= initValues.max}
                            >
                            </button>

                            <button
                                onClick={(e) => decrement(e, initValues.title)}
                                disabled={currentValue<= initValues.max}
                            >
                            </button>
                        </div>
                    </div>
                </div>
            </div>
      </div>
  );
}

TeslaCounter.propTypes = {
    currentValue: PropTypes.number,
    increment: PropTypes.func,
    decrement: PropTypes.func,
    initValues :PropTypes.object
}
export default TeslaCounter;
