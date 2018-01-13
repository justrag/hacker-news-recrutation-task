import { GET_LIST_SUCCESS } from '../constants/';

const list = (state = [], { type, payload }) => {
  switch (type) {
    case GET_LIST_SUCCESS:
      return payload;
    default:
      return state;
  }
};
export default list;
