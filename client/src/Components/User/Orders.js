import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Link } from "react-router-dom";
import {
  clearItemFromCart,
  removeFromCart,
  AddToCart,
  PostHistory
} from '../../actions/cart';
import { getCartTotal } from '../../Utils/cart';
import StripeButton from '../pAYMENT/payment';
// import Payment from "./Payment";
import NavBar from '../Navbar/Navbar';
const Orders = ({
  auth: { user },
  cart,
  AddToCart,
  removeFromCart,
  clearItemFromCart,
  PostHistory
}) => {
  const total = getCartTotal(cart);
  const history = useHistory();
  
  return (
    <div className="order">
      <div className="orders">
        <div className="food_title">
          <div className="food_h1">
            <h1 className="two">Orders</h1>
            
          </div>
          <button className="back" onClick={()=>{history.push('/')}}> <i className="fas fa-long-arrow-alt-left"></i></button>
          {/* <div className="navbar">
            <NavBar />
          </div> */}
        </div>
      </div>
      {user ? (
        <div className="personal">
          <h1>Personal Info</h1>
          <img
            src="https://img2.pngio.com/pamela-wilkins-country-stitches-gravatar-png-400_400.png"
            alt="User avatar"
          />
          <h3>Name: {user.name}</h3>
          <h3>Branch: {user.branch}</h3>
        </div>
      ) : (
        ''
      )}
      {
        cart.length==0 ? (<div className="empty">
          <h1>Cart is Empty, Place Your Order First !</h1>
        </div>):(<div>  <div className="canteen_table">
        <table>
          <tr className="title_table">
            <th>Food Item Type</th>
            <th>Food name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Increase</th>
            <th>Decrease</th>
            <th>Clear Cart</th>
            {/* <th>Order</th> */}
          </tr>
          {cart.map((cartItem) => {
            return (
              <tr className="content_table">
                <td>{cartItem.foodItem}</td>
                <td>{cartItem.name}</td>
                <td>{cartItem.price}</td>
                <td>{cartItem.quantity}</td>
                <td>
                  <button className="add" onClick={() => AddToCart(cartItem)}>
                    +
                  </button>
                </td>
                <td>
                  <button
                    className="remove"
                    onClick={() => removeFromCart(cartItem)}
                  >
                    -
                  </button>
                </td>
                <td>
                  <button
                    className="clear"
                    onClick={() => clearItemFromCart(cartItem._id)}
                  >
                    x
                  </button>
                </td>
                {/* <td>
                 
                </td> */}
              </tr>
            );
          })}
        </table>

        <br />

        <br />
      </div>
       <div>
       {<h1 className="get_total">Total Price: {total}</h1>}
     </div>

     <div>
       <StripeButton />
       <button
                   className="butta"
                   onClick={() => {PostHistory({cart,username:user.name,branch:user.branch,totall:total});
                      alert("Your order is Placed");
                     // history.push('/');
                     window.location.reload();
                    

                   }}
                 >
                     Place Order
                 </button>
       <br />
       <br />
     </div>
     </div>
      
      )
      }
    
     
    </div>
  );
};
const mapStateToProps = (state) => ({
  cart: state.cart.cartItems,
  auth: state.auth,
});
export default connect(mapStateToProps, {
  AddToCart,
  removeFromCart,
  clearItemFromCart,
  PostHistory,
})(Orders);
