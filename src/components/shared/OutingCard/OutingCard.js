import React from 'react';
import { Link } from 'react-router-dom';

import outingShape from '../../../helpers/propz/outingShape';

import './OutingCard.scss';

class OutingCard extends React.Component {
  static propTypes = {
    outing: outingShape.outingShape,

  }

  render() {
    const { outing } = this.props;
    const singleLink = `/outings/${outing.id}`;
    const editLink = `/edit/${outing.id}`;
    return (
      <div className="OutingCard col-3">
        <div className="card">
            <img className="card-img-top" src={outing.imageUrl} alt="Outing Card"/>
          <div className="card-body">
            <h5 className="card-title">{outing.name}</h5>
            <Link className= "btn btn-info" to={singleLink}>View More</Link>
            <Link className= "btn btn-warning" to={editLink}>Edit</Link>

          </div>
          </div>
      </div>
    );
  }
}

export default OutingCard;
