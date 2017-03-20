/**
 * Created by BlisS on 20/03/17.
 */
import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
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
    </nav>
  );
}

export default Header;
