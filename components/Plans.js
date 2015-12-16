import React, { Component, PropTypes } from 'react'
import PlanItem from './PlanItem'

class Plans extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    const { plans, actions } = this.props

    return (
      <div className="main">
        <ul className="plan-list">
          {plans.map(plan =>
            <PlanItem key={plan.id} plan={plan} {...actions} />
          )}
        </ul>
      </div>
    )
  }
}

Plans.propTypes = {
  plans: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default Plans
