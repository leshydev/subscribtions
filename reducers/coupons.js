import { GET_COUPON } from '../constants/CouponActionTypes'

const initialState = [
  {
    id: 0,
    discount: 10
  },
  {
    id: 1,
    discount: 20,
    selected: true
  },
  {
    id: 2,
    discount: 50
  },
]

export default function coupons(state = initialState, action) {
  switch (action.type) {
    case GET_COUPON:
      return state.map(coupon =>
          coupon.id === action.id ?
              Object.assign({}, coupon, { selected: true }) :
              Object.assign({}, coupon, { selected: false })
      )
    default:
      return state
  }
}
