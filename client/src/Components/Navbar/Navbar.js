import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Logout } from '../../actions/auth';
const NavBar = ({ auth: { user, isAuthenticated }, totalQuantity, Logout }) => {
  return (
    <div>
      {user ? (
        user.name === 'admin' ? (
          <div className="admin_nav">
            <Link to="/admin" className="link">
              Admin
            </Link>
            <Link className="link" onClick={() => Logout()}>
              <i classname="fa fa-sign-out"></i>Logout
            </Link>
            <Link className="link" to="/orderplaced">
              Orders Placed
            </Link>
          </div>
        ) : (
          <div className="user_nav">
            <Link to="/history" className="link">
              History
            </Link>
            <Link className="link" onClick={() => Logout()}>
              <i classname="fas fa-sign-out"></i>Logout
            </Link>
            <Link to="/orders" className="link">
              <i className="fas fa-shopping-cart"> {totalQuantity}</i>
            </Link>
          </div>
        )
      ) : (
        ''
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  totalQuantity: state.cart.totalQuantity,
});

export default connect(mapStateToProps, { Logout })(NavBar);
