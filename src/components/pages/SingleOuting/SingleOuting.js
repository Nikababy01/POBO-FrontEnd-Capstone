import React from 'react';

import './SingleOuting.scss';
import outingsData from '../../../helpers/data/outingsData';

class SingleOuting extends React.Component {
  state = {
    outing: {},
  }

  componentDidMount() {
    const { outingId } = this.props.match.params;
    outingsData.getSingleOuting(outingId)
      .then((response) => this.setState({ outing: response.data }))
      .catch((err) => console.error('unable to get single outing: ', err));
  }

  render() {
    const { outing } = this.state;
    return (
      <div className="SingleOuting">
      <h1>{outing.name}</h1>
      <div className="row">
       <div className= "col-6">
       <img className="single-image-view" src={outing.imageUrl} alt="Outing Card"/>
      </div>
      <div className="col-6">
        <h2>Price: {outing.price}</h2>
        <p>{outing.description}</p>
        <p>Located: {outing.address} {outing.city}, {outing.state} {outing.zipcode}</p>
        </div>
        </div>
        </div>
    );
  }
}

export default SingleOuting;
