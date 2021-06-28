import { GET_ITEM } from './types';
import axios from 'axios';

export const GetAllSelectedItems = (food) => async (dispatch) => {
  try {
    const res = await axios.get(`/admin/${food}`);
    dispatch({
      type: GET_ITEM,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
