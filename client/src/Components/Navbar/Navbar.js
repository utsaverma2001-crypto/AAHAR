import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Logout } from '../../actions/auth';
const NavBar = ({ auth: { user, isAuthenticated }, totalQuantity, Logout }) => {
//  console.log(isAuthenticated);
  return (
    <div>
      {isAuthenticated ?( user ? (
        user.name === 'admin' ? (
          <div className="admin_nav">
            <Link to="/admin" className="link">
              Admin
            </Link>
            <button className="link" onClick={() => Logout()}>
              <i className="fa fa-sign-out"></i>Logout
            </button>
            <Link className="link" to="/orderplaced">
              Orders Placed
            </Link>
          </div>
        ) : (
          <div className="user_nav">
            <Link to="/history" className="link">
              History
            </Link>
            <button className="link" onClick={() => Logout()}>
              <i className="fas fa-sign-out"></i>Logout
            </button>
            <Link to="/orders" className="link">
              <i className="fas fa-shopping-cart"> {totalQuantity}</i>
            </Link>
          </div>
        )
      ) : (
        ''
      )):(<Redirect to="/signin" />)}
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  totalQuantity: state.cart.totalQuantity,
});

export default connect(mapStateToProps, { Logout })(NavBar);
