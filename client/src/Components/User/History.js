import React, { useState } from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import {useHistory } from 'react-router-dom';
import { GetHistory } from '../../actions/cart';
import Spinner from '../Spinner/Spinner';
const History = ({ auth: { user }, GetHistory, history: { history } }) => {
  useState(() => {
    GetHistory();
  }, [GetHistory]);
  const historyy = useHistory();
  return (
    <div className="history">
      <div className="personal_data">
        {user ? (
          <div>
              <button className="back" onClick={()=>{historyy.push('/')}}> <i className="fas fa-long-arrow-alt-left"></i></button>
            <h1>Orders</h1>
            <img
              src="https://www.buropropiedades.com/assets/agent/gravatar-f2fcbefa79b7e622df3128e40098e22b419ac04287ffc9dcb8725b8aeb7b6b0c.png"
              alt="bio"
            />
            <h2>Personal Data</h2>
            <h3>Name: {user.name}</h3>
            <h3>Branch: {user.branch}</h3>
          </div>
        ) : (
          ''
        )}
      </div>

      <div>
        {history ? (
          <div className="history_box">
            {history.length > 0 ? (
              history.map((order) => (
                <div className="order_box">
               
                  {order.orders.map((ord) => (
                    <div>
                      <h3>FoodItem: {ord.foodItem}</h3>
                      <h3>Name: {ord.name}</h3>
                      <h3>Price: {ord.price}</h3>
                      <h3>Quantity: {ord.quantity}</h3>
                    </div>
                  ))}
                  <h4>
                    Date: <Moment date={order.date} />
                  </h4>
                  <h1>Total Price: {order.totalPrice}</h1>
                  {!order.isOpen?(<h2 className="Green">Order is Ready!!</h2>):(<h2 className="Red">Order is in processing</h2>)}
                </div>
              ))
            ) : (
              <Spinner />
            )}
          </div>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  history: state.cart,
  auth: state.auth,
});

export default connect(mapStateToProps, { GetHistory })(History);
