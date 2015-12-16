import * as types from '../constants/PlanActionTypes'

export function selectPlan(id) {
  return { type: types.SELECT_PLAN, id }
}
