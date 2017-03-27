/**
 * Created by BlisS on 20/03/17.
 */
import React from 'react';
// import {Link} from 'react-router';
import Header from './common/header';
// para psar el componente a redux
import {connect} from 'react-redux';



class App extends React.Component {
  render(){
    return (
      <div className="container">
        <Header
        loading={this.props.loading}/>
        {this.props.children}
        </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.object.isRequired,
  loading: React.PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps){
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
