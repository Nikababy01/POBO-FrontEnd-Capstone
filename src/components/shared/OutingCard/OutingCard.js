import React from 'react';
// import PropTypes from 'prop-types';

import './OutingCard.scss';

class OutingCard extends React.Component {
  render() {
    const { outing } = this.props;
    return (
      <div className="OutingCard col-3">
        <div className="card">
            <img className="card-img-top" src={outing.imageUrl} alt="Outing Card"/>
          <div className="card-body">
            <h5 className="card-title">{outing.name}</h5>
            <p className="card-text">{outing.description}</p>
          </div>
          </div>
      </div>
    );
  }

}

export default OutingCard;
