import React, {Component} from 'react';


class App4 extends Component {
  constructor(props) {
    super(props)
    this.state = {count: 0}

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div className='App3'>
        <button 
          onClick={this.handleClick}
          // третий вариант
          // onClick={()=>this.setState({count: this.state.count + 3})}
          >{this.state.count}
        </button>
      </div>
    )
  }
} 

export default App4;
