import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import './App.scss';

import MyNavbar from '../components/shared/MyNavbar/MyNavbar';

import Auth from '../components/pages/Auth/Auth';
import Home from '../components/pages/Home/Home';
import NewOuting from '../components/pages/NewOuting/NewOuting';
import EditOuting from '../components/pages/EditOuting/EditOuting';
import EditComment from '../components/pages/EditComment/EditComment';
import SingleOuting from '../components/pages/SingleOuting/SingleOuting';
import Comment from '../components/pages/Comment/Comment';
import CommentForm from '../components/pages/CommentForm/CommentForm';

import fbConnection from '../helpers/data/connection';

fbConnection();

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === false
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/home', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === true
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/auth', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
          <MyNavbar authed={authed}/>
             <div className="container">
              <div className="row">
                <Switch>
                  <PrivateRoute path='/home' component={Home} authed={authed} />
                  <PrivateRoute path='/new' component={NewOuting} authed={authed} />
                  <PrivateRoute path='/comment/:outingId' component={Comment} authed={authed} />
                  <PrivateRoute path='/commentform/:outingId' component={CommentForm} authed={authed} />
                  <PrivateRoute path='/editcomment/:outingId' component={EditComment} authed={authed} />
                  <PrivateRoute path='/edit/:outingId' component={EditOuting} authed={authed} />
                  <PrivateRoute path='/outings/:outingId' component={SingleOuting} authed={authed} />
                  <PublicRoute path='/auth' component={Auth} authed={authed} />
                  <Redirect from="*" to="/home"/>
                </Switch>
              </div>
            </div>
          </React.Fragment>
        </BrowserRouter>
       </div>
    );
  }
}

export default App;
