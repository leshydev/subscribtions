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
    const { plan } = this.props

    return (
      <div>
        <ul>
          {plan.subscriptions ? plan.subscriptions.map(subscription =>
              <li>{ this.printSubscription(subscription.months, plan.price, subscription.safe) }</li>
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
