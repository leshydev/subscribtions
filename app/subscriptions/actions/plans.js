import * as types from '../constants/PlanActionTypes'

export function selectPlan(id) {
  return { type: types.SELECT_PLAN, id }
}
export function selectSubscription(planId, subscriptionId) {
  return { type: types.SELECT_SUBSCRIPTION, planId, subscriptionId }
}
