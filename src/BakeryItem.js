import { Component } from 'react'
import './App.css'

class BakeryItem extends Component {
  constructor (props) {
    super(props)
    console.log(props)
  }
  render () {
    return (
      <div>
        <img src={this.props.info.image} style={{ width: '20%' }}></img>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}
        >
          <h3>{this.props.info.name} {this.props.info.price}</h3>
          <div class='break'></div>
          <h2>{this.props.info.vegan}</h2>
          <h2>{this.props.info.nutfree}</h2>
          <p className='description'>{this.props.info.description}</p>
        </div>
      </div>
    )
  }
}
export default BakeryItem
