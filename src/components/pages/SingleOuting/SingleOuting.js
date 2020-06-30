import React from 'react';
import { Link } from 'react-router-dom';

import './SingleOuting.scss';
import outingsData from '../../../helpers/data/outingsData';

class SingleOuting extends React.Component {
  state = {
    outing: {},
    comment: {},
  }

  componentDidMount() {
    const { outingId } = this.props.match.params;
    outingsData.getSingleOuting(outingId)
      .then((response) => this.setState({ outing: response.data }))
      .catch((err) => console.error('unable to get single outing: ', err));
  }

  removeOuting = () => {
    const { outingId } = this.props.match.params;
    outingsData.deleteOuting(outingId)
      .then(() => this.props.history.push('/home'))
      .catch((err) => console.error('unable to delete outing: ', err));
  }

  render() {
    const { outing } = this.state;
    const { outingId } = this.props.match.params;
    const editLink = `/edit/${outingId}`;
    const commentLink = `/comment/${outingId}`;// added comment link here and below
    return (
      <div className="SingleOuting">
        <Link className="btn btn-warning" to={editLink}><i className="fas fa-pencil-alt"></i></Link>
        <button className="btn btn-danger" onClick={this.removeOuting}><i className="fas fa-trash-alt"></i></button>
      <h1>{outing.name}</h1>
      <div className="row">
       <div className= "col-6">
       <img className="single-image-view" src={outing.imageUrl} alt="Outing Card"/>
      </div>
      <div className="col-6">
        <h2>Price: {outing.price}</h2>
        <p>{outing.description}</p>
        <p>Located: {outing.address} {outing.city}, {outing.state} {outing.zipcode}</p>
        <Link className="btn btn-warning" to={commentLink}>Reviews</Link>
        </div>
        </div>
        </div>
    );
  }
}

export default SingleOuting;
