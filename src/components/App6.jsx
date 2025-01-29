import React, { Component } from 'react'
import { Button } from 'react-bootstrap' // Импортируем из react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css' // Импортируем стили Bootstrap

class App6 extends Component {
  constructor() {
    super()
    this.state = {
      count: 0,
    }
    this.plus = this.plus.bind(this)
    this.minus = this.minus.bind(this)
  }

  plus() {
    this.setState({ count: this.state.count + 1 })
  }

  minus() {
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    return (
      <div
        className='
          d-flex 
          justify-content-center
          mt-3
          '
      >
        <Button
          className='p-2'
          variant='primary'
          onClick={this.plus}
          style={{ width: '70px' }}
        >
          Plus
        </Button>
        <h2 className='p-2'>{this.state.count}</h2>
        <Button
          className='p-2'
          variant='success'
          onClick={this.minus}
          style={{ width: '70px' }}
        >
          Minus
        </Button>
      </div>
    )
  }
}

export default App6
