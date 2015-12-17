import { combineReducers } from 'redux'
import plans from './plans'
import offices from './offices'
import card from './card'
import coupons from './coupons'

const rootReducer = combineReducers({
  plans, offices, card, coupons
})

export default rootReducer
