import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

class PlanItem extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    const { plan, selectPlan } = this.props

    return (
      <li className={classnames({
        selected: plan.selected
      })} onClick={id => {selectPlan(plan.id)}}>
        <div className="view">
          <label>
            {plan.type}
          </label>
          <ul>
            {plan.bonuses.map(bonus =>
                <li>{bonus}</li>
            )}
          </ul>
        </div>
      </li>
    )
  }
}

PlanItem.propTypes = {
  plan: PropTypes.object.isRequired,
  selectPlan: PropTypes.func.isRequired
}

export default PlanItem
