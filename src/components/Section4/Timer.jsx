import React from 'react'
import './styles.css'

export default class Timer extends React.Component {
  state = {
    count: 0,
    isCounting: false,
  }

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    return (
      <div className='Timer'>
        <h1>React Timer</h1>
        <h3>{this.state.count}</h3>
        {!this.state.isCounting ? (
          <button onClick={this.handleStart}>Start</button>
        ) : (
          <button onClick={this.handleStop}>Stop</button>
        )}
        <button onClick={this.handleReset}>Reset</button>
      </div>
    )
  }
}
