import * as types from '../constants/PlanActionTypes'

export function selectPlan(id) {
  return { type: types.SELECT_PLAN, id }
}
export function selectSubscribtion(planId, subscribtionId) {
  return { type: types.SELECT_SUBSCRIBTION, planId, subscribtionId }
}
