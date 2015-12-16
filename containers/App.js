import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Plans from '../components/Plans'
import PlanContent from '../components/PlanContent'
import * as PlanActions from '../actions/plans'

class App extends Component {
  render() {
    const { plans, actions } = this.props
    const plan = plans.find(plan => plan.selected)
    return (
      <div>
        <Plans plans={plans} actions={actions} />
        <PlanContent plan={plan} actions={actions} />
      </div>
    )
  }
}

App.propTypes = {
  plans: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    plans: state.plans
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(PlanActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
