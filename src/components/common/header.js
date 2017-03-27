/**
 * Created by BlisS on 20/03/17.
 */
import React from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './loadingDots';

const Header = ({loading}) => {
  return (
    <nav>
      <IndexLink to="/" activateClassName="active">
        Inicio
      </IndexLink>
      {"  |  "}
      <Link to="/courses" activeClassName="active">
        Courses
      </Link>
      {"  |  "}
      <Link to="/about" activeClassName="active">
        About
      </Link>
      {loading && <LoadingDots interval={100} dots={20} />}
    </nav>
  );
};

Header.propTypes = {
  loading: React.PropTypes.bool.isRequired
};

export default Header;
