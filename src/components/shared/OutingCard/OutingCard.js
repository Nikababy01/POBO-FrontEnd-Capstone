import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import outingShape from '../../../helpers/propz/outingShape';

import './OutingCard.scss';

class OutingCard extends React.Component {
  static propTypes = {
    outing: outingShape.outingShape,
    removeOuting: PropTypes.func.isRequired,
  }

  render() {
    const { outing, removeOuting } = this.props;
    const singleLink = `/outings/${outing.id}`;
    const editLink = `/edit/${outing.id}`;
    return (
      <div className="OutingCard col-4">
        <div className="card">
            <img className="card-img-top" src={outing.imageUrl} alt="Outing Card"/>
          <div className="card-body">
            <p className="card-city">{outing.city},{outing.state}</p>
            <h5 className="card-title">{outing.name}</h5>
            <Link className= "btn btn-info event-view" to={singleLink}>View More</Link>
            <Link className= "btn btn-warning event-view" to={editLink}><i className="fas fa-pencil-alt"></i></Link>
            <button className="btn btn-danger event-view" onClick={() => removeOuting(outing.id)}><i className="fas fa-trash-alt"></i></button>
          </div>
          </div>
      </div>
    );
  }
}

export default OutingCard;
