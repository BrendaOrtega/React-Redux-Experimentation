/**
 * Created by BlisS on 20/03/17.
 */
import React from 'react';
// import {Link} from 'react-router';
import Header from './common/header';


class App extends React.Component {
  render(){
    return (
      <div className="container">
        <Header/>
        {this.props.children}
        </div>
    );
  }
}

App.PropTypes = {
  children: React.PropTypes.object.isRequired
};

export default App;
