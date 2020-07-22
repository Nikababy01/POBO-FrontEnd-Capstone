import React from 'react';

// import authData from '../../../helpers/data/authData';
import outingsData from '../../../helpers/data/outingsData';
import OutingCard from '../../shared/OutingCard/OutingCard';
import smash from '../../../helpers/data/smash';

import './Home.scss';

class Home extends React.Component {
  state = {
    outings: [],
    search: '',
  }

  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 20) });
  }

  getOutings = () => {
    // const uid = authData.getUid();
    outingsData.getOutingsByUid()
      .then((outings) => this.setState({ outings }))
      .catch((err) => console.error('unable to get outings: ', err));
  }

  componentDidMount() {
    this.getOutings();
  }

  removeOuting= (outingId) => {
    smash.completelyRemoveOuting(outingId)
      .then(() => this.getOutings())
      .catch((err) => console.error('unable to delete outing: ', err));
  }

  render() {
    const filteredCity = this.state.outings.filter(
      (outing) => outing.city.indexOf(this.state.search) !== -1,
    );
    const buildOutingCards = filteredCity.map((outing) => (
      <OutingCard key={outing.id} outing={outing} removeOuting={this.removeOuting}/>
    ));
    return (
      <div className="Home">
        <div className="citysearch">
          <h3>Search by City</h3>
          <input type="text"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
          />
          <h3>List of Outings "{filteredCity.length}"</h3>

        </div>
        <div className= "d-flex flex-wrap">
          {buildOutingCards}
        </div>

      </div>
    );
  }
}

export default Home;
