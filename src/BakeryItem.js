import { Component } from 'react'
import './App.css'

class BakeryItem extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div>
      <img src={this.props.info.image} style={{ width: '30%', }}></img>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}
        >
          <h3>
            {this.props.info.name} {this.props.info.price}
          </h3>
          <div class='break'></div>
          <p className='description'>{this.props.info.description}</p>
          {this.props.info.vegan === 1 && <p className='description'>(vegan)</p>}
          {this.props.info.nutfree === 1 && <p className='description'>(nut-free)</p>}
        </div>
      </div>
    )
  }
}
export default BakeryItem
