import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import './Auth.scss';
import { Carousel } from 'react-bootstrap';

class Auth extends React.Component {
  loginClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  render() {
    return (
      <div className="Auth">
        <React.Fragment>
        <h1>Let's Get Started</h1>
        <button className="btn btn-info" onClick={this.loginClickEvent}>Google Login</button>
        <div>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media.mercola.com/ImageServer/Public/2018/April/FB/spend-time-outdoors-fb.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3><strong>Free Family Fun!</strong></h3>
      <h4><strong>Discover outings you have never seen advertised!</strong></h4>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.gannett-cdn.com/-mm-/391223f8d1c01bcd26042b163fe91182d54e0d27/c=0-250-3800-2388/local/-/media/2017/06/05/AsburyPark/B9327889569Z.1_20170605110700_000_G4BIJ0ERH.1-0.jpg?width=3200&height=1680&fit=crop"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3><strong>Get out of the house without breaking your wallet</strong></h3>
      <h4>Kids love to explore!</h4>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://globaljews.org/wp-content/uploads/2020/05/Talia_Family_1600x900-1600x900-1.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Spend time with family!</h3>
      <h4>So many free options. Stay in the know!</h4>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
        </React.Fragment>
        </div>
    );
  }
}
export default Auth;
