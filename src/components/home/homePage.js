/**
 * Created by BlisS on 20/03/17.
 */
import React from 'react';
import {Link} from 'react-router';


class HomePage extends React.Component {
  render(){
    return (
      <div className="jumbotron">
        <h1>BlisS' Starter Kit</h1>
        <p>React, Redux and React Router in ES6 for ultra-responsive web apps.</p>
        <Link to="about" className="btn btn-primary btn-lg">Saber más  </Link>
      </div>
    );
  }
}

export default HomePage;
