import React, { Component, PropTypes } from 'react'
import PlanItem from './PlanItem'

class Plans extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    const { plans, actions } = this.props

    return (
      <div>
        <div className="plan-list row">
          {plans.map(plan =>
            <PlanItem key={plan.id} plan={plan} {...actions} />
          )}
        </div>
      </div>
    )
  }
}

Plans.propTypes = {
  plans: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default Plans
