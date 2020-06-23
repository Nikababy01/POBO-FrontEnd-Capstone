import React from 'react';

import './NewOuting.scss';

class NewOuting extends React.Component {
  state = {
    name: '',
    description: '',
    city: '',
    imageUrl: '',
    isIndoor: '',
    price: '',
    seasonId: '',
    address: '',
    state: '',
    zipcode: '',
    ageId: '',
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ name: e.target.value });
  }

  descriptionChange = (e) => {
    e.preventDefault();
    this.setState({ description: e.target.value });
  }

  cityChange = (e) => {
    e.preventDefault();
    this.setState({ city: e.target.value });
  }

  imageUrlChange = (e) => {
    e.preventDefault();
    this.setState({ imageUrl: e.target.value });
  }

  priceChange = (e) => {
    e.preventDefault();
    this.setState({ price: e.target.value });
  }

  seasonIdChange = (e) => {
    e.preventDefault();
    this.setState({ seasonId: e.target.value });
  }

  addressChange = (e) => {
    e.preventDefault();
    this.setState({ address: e.target.value });
  }

  stateChange = (e) => {
    e.preventDefault();
    this.setState({ state: e.target.value });
  }

  zipcodeChange = (e) => {
    e.preventDefault();
    this.setState({ zipcode: e.target.value });
  }

  ageIdChange = (e) => {
    e.preventDefault();
    this.setState({ ageId: e.target.value });
  }

  indoorChange = (e) => {
    e.preventDefault();
    this.setState({ isIndoor: e.target.value });
  }

  render() {
    const {
      name,
      description,
      city,
      imageUrl,
      isIndoor,
      price,
      seasonId,
      address,
      state,
      zipcode,
      ageId,

    } = this.state;
    return (
      <div className="NewOuting col-12">
          <h1>Add New Outing</h1>
        <form className="col-6 offset-3 text-left">
          <div className="form-group">
            <label htmlFor="outing-name">Name</label>
            <input
              type="text"
              className="form-control"
              id="outing-name"
              value={name}
              onChange={this.nameChange}
            />
            </div>
            <div className="form-group">
            <label htmlFor="outing-description">Add Brief Description</label>
            <input
              type="text"
              className="form-control"
              id="outing-description"
              value={description}
              onChange={this.descriptionChange}
            />
            </div>
            <div className="form-group">
            <label htmlFor="outing-imageUrl">Add Image</label>
            <input
              type="text"
              className="form-control"
              id="outing-imageUrl"
              value={imageUrl}
              onChange={this.imageUrlChange}
            />
            </div>
            <div className="form-group">
            <label htmlFor="outing-price">Price</label>
            <input
              type="text"
              className="form-control"
              id="outing-price"
              value={price}
              onChange={this.priceChange}
            />
            </div>
            <div className="form-group">
            <label htmlFor="outing-address">Address</label>
            <input
              type="text"
              className="form-control"
              id="outing-address"
              value={address}
              onChange={this.addressChange}
            />
            </div>
            <div className="form-group">
            <label htmlFor="outing-city">Add City</label>
            <input
              type="text"
              className="form-control"
              id="outing-city"
              value={city}
              onChange={this.cityChange}
            />
            </div>
            <div className="form-group">
            <label htmlFor="outing-state">Add State</label>
            <input
              type="text"
              className="form-control"
              id="outing-state"
              value={state}
              onChange={this.stateChange}
            />
            </div>
            <div className="form-group">
            <label htmlFor="outing-zipcode">Add Zipcode</label>
            <input
              type="text"
              className="form-control"
              id="outing-zipcode"
              value={zipcode}
              onChange={this.zipcodeChange}
            />
            </div>
            <div className="form-group">
            <label htmlFor="outing-ages">Add Ages</label>
            <input
              type="text"
              className="form-control"
              id="outing-ages"
              value={ageId}
              onChange={this.ageIdChange}
            />
            </div>
            <div className="form-group">
            <label htmlFor="outing-season">Add Season</label>
            <input
              type="text"
              className="form-control"
              id="outing-season"
              value={seasonId}
              onChange={this.seasonIdChange}
            />
            </div>
            <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="outing-indoor"
              checked={isIndoor}
              onChange={this.indoorChange}
              />
            <label className="form-check-label" htmlFor="outing-indoor">Is this an Indoor Outing?</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
      </div>

    );
  }
}

export default NewOuting;
