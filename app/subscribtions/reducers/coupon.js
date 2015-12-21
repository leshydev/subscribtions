import { GET_COUPON } from '../constants/CouponActionTypes'

const initialState = {
  id: 0,
  discount: 0
}

export default function coupon(state = initialState, action) {
  switch (action.type) {
    case GET_COUPON:
      return action.data
    default:
      return state
  }
}
