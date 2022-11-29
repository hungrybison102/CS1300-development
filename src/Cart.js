import { Component } from 'react'
import './App.css'
import Button from '@mui/material/Button'
import { ArrowDownward, ArrowUpward, Clear } from '@mui/icons-material'

class Cart extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div>
      {this.props.info.cart.map((item, index) => (
        <li>
          {' '}
          <Button onClick={() => this.props.info.deleteFunction(item, index)}>
            {item.name} <Clear></Clear>
          </Button>
        </li>
      ))}
      </div>
    )
  }
}
export default Cart
