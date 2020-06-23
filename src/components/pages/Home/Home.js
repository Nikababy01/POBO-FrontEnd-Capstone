import React from 'react';

import authData from '../../../helpers/data/authData';
import outingsData from '../../../helpers/data/outingData';
import OutingCard from '../../shared/OutingCard/OutingCard';

import './Home.scss';

class Home extends React.Component {
  state = {
    outings: [],
  }

  getOutings = () => {
    const uid = authData.getUid();
    outingsData.getOutingsByUid(uid)
      .then((outings) => this.setState({ outings }))
      .catch((err) => console.error('unable to get outings: ', err));
  }

  componentDidMount() {
    this.getOutings();
  }

  render() {
    const { outings } = this.state;
    const buildOutingCards = outings.map((outing) => (
      <OutingCard outing={outing}/>
    ));
    return (
      <div className="Home">
        <h2>Home</h2>
        <div className= "d-flex flex-wrap">
          {buildOutingCards}
        </div>

      </div>
    );
  }
}

export default Home;
