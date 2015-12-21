import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

class PlanItem extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    const { plan, selectPlan } = this.props

    return (
      <div className={
          classnames({
            selected: plan.selected
          }, 'col-sm-4 text-center')}
        onClick={id => {selectPlan(plan.id)}}>
        <div>
          <h3>
            {plan.type}
          </h3>
          <ul className="text-left">
            {plan.bonuses.map(bonus =>
                <li>{bonus}</li>
            )}
          </ul>
        </div>
      </div>
    )
  }
}

PlanItem.propTypes = {
  plan: PropTypes.object.isRequired,
  selectPlan: PropTypes.func.isRequired
}

export default PlanItem
