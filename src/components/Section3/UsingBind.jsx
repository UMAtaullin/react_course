import React, {Component} from 'react';


class UsingBind extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }

    this.handleClick = this.handleClick.bind(this)
  }

  // первый вариант объявления через стрелочную ф, где нет своего this и не нужно использовать bind
  // второй вариант объявления функции
  handleClick() {
    this.setState({
      count: this.state.count + 1,
    })
  }

  render() {
    return (
      <div className='App3'>
        <button
          onClick={this.handleClick}
          // третий вариант прописываем прямо в onClick
          // onClick={()=>this.setState({count: this.state.count + 3})}
        >
          {this.state.count}
        </button>
      </div>
    )
  }
} 

export default UsingBind
