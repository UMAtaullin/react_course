import React, {Component} from 'react';


class App3 extends Component {
  constructor(props) {
    super(props)
    // мы всегда создаем какой то ключ и обновляем его через setState()
    this.state = {count: 0}
  }

  handleClick = () => {
    // отвечает за обновления состояния, только через setState()
    this.setState({
      count: this.state.count + 1
    })
    // можем добавить колбэк, который будет выполнен после того как изменения произойдут
    this.setState((prevState) => ({
      count: prevState.count + 1
    }), () => {console.log('setState complete')})
    // setState работает асинхронно, поэтому с начало будет эта надпись
    console.log('from handleClick')
  }

  render() {
    return (
      <div className='App3'>
        <button 
          onClick={this.handleClick}
          >{this.state.count}
        </button>
      </div>
    )
  }
} 

export default App3;
