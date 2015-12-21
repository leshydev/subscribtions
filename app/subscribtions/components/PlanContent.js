import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

class PlanContent extends Component {
  constructor(props, context) {
    super(props, context)
  }

  printSubscribtion(months, price, safe = 0) {
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
          {plan.subscribtions ? plan.subscribtions.map(subscribtion =>
              <li>
                <div className="radio">
                  <label>
                    <input name="planContent" type="radio" checked={subscribtion.selected}
                           onChange={() => {actions.selectSubscribtion(plan.id, subscribtion.id)}}/>
                    { this.printSubscribtion(subscribtion.months, plan.price, subscribtion.safe) }
                  </label>
                </div>
              </li>
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
