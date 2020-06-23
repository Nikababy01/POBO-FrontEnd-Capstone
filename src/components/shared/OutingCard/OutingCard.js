import React from 'react';
// import PropTypes from 'prop-types';

import './OutingCard.scss';

class OutingCard extends React.Component {
  render() {
    const { outing } = this.props;
    return (
      <div className= "OutingCard">
        {outing.name}
      </div>
    );
  }

}

export default OutingCard;
