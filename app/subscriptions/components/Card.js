import React, { Component, PropTypes } from 'react'
import {ButtonGroup, Button, Label, Input} from 'react-bootstrap'

class Card extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    const { card } = this.props

    return (
      <div>
        <h4>Payment method</h4>
        <hr/>
        <form>
            <div>
                <ButtonGroup>
                    <Button>Visa</Button>
                    <Button>MasterCard</Button>
                    <Button>Mir</Button>
                </ButtonGroup>
            </div>
              <div className="form-group">
                  <Label>Card number</Label>
                  <input type="text" className="form-control" value={card.number} />
              </div>
              <div className="form-group">
                  <Label>Street Address</Label>
                  <input type="text" className="form-control" value={card.address} />
              </div>
        </form>
      </div>
    )
  }
}

Card.propTypes = {
  card: PropTypes.object.isRequired
}

export default Card
