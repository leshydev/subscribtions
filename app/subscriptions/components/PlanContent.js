import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

class PlanContent extends Component {
  constructor(props, context) {
    super(props, context)
  }

  printSubscription(months, price, safe = 0) {
    return `${months} months for $${(price * months * (1 - safe / 100)).toFixed(2)}`
  }

  render() {
    const { plan, actions } = this.props

    return (
      <div>
        <h4>
          {`${plan.type.toUpperCase()} plan for askmed.com`}
        </h4>
        <hr/>
        <ul>
          {plan.subscriptions ? plan.subscriptions.map(subscription =>
              <div className="radio">
                  <label>
                      <input name="planContent" type="radio" checked={subscription.selected}
                             onChange={() => {actions.selectSubscription(plan.id, subscription.id)}}/>
                      { this.printSubscription(subscription.months, plan.price, subscription.safe) }
                  </label>
              </div>
          ) : ''}
        </ul>
      </div>
    )
  }
}

PlanContent.propTypes = {
  plan: PropTypes.object.isRequired
}

export default PlanContent
