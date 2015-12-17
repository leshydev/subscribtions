import * as types from '../constants/CouponActionTypes'

export function getCoupon(id) {
  return { type: types.GET_COUPON, id }
}
