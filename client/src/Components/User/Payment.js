import React from 'react';
import { connect } from 'react-redux';
// import Spinner from '../Spinner/Spinner';
// import { PostHistory } from '../../actions/cart';
import cart from '../../reducer/cart';
import { getCartTotal } from '../../Utils/cart';
// import { useHistory } from 'react-router-dom';
import StripeButton from '../pAYMENT/payment';
const Payment = () => {
 // const history = useHistory();
  //const total = getCartTotal(cart);
  return (
    <div>
      <div className="chinese_nav">Payment Please</div>
     
      <div className="payment_buttons">
      {/* <h1>Total Price: {total}</h1> */}

        {/* <button
          className="order_button"
          onClick={() => {
         history.push('/history');
          }}
        >
          Done
        </button> */}
        <StripeButton />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart.cartItems,
});
export default connect(mapStateToProps, { getCartTotal})(Payment);
