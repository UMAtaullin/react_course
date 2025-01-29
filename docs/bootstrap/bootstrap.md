Ошибка, с которой вы столкнулись, связана с неправильным импортом компонента `Button` из библиотеки Bootstrap в вашем React-приложении. В вашем коде вы импортируете `Button` следующим образом:

```javascript
import { Button } from 'bootstrap';
```

Однако, чтобы использовать компоненты Bootstrap в React, вам нужно импортировать их из библиотеки `react-bootstrap`. Правильный импорт должен выглядеть так:

```javascript
import { Button } from 'react-bootstrap';
```

## Исправление кода

Вот как должен выглядеть ваш код после исправления:

```javascript
import React, { Component } from 'react';
import { Button } from 'react-bootstrap'; // Импортируем из react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; // Импортируем стили Bootstrap

class App5 extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div className='App5'>
        <Button variant='primary' onClick={this.handleClick}>
          Plus
        </Button>
        <span>{this.state.count}</span>
        <button onClick={this.handleClick}>Minus</button>
      </div>
    );
  }
}

export default App5;
```

## Дополнительные рекомендации

1. **Убедитесь в установке библиотек**: Проверьте, что у вас установлены `react-bootstrap` и `bootstrap`. Вы можете установить их с помощью команды:
   ```bash
   npm install react-bootstrap bootstrap
   ```

2. **Импорт стилей**: Не забудьте импортировать стили Bootstrap в ваш основной файл (например, `index.js` или `App.js`):
   ```javascript
   import 'bootstrap/dist/css/bootstrap.min.css';
   ```

Следуя этим шагам, вы должны устранить ошибку и корректно использовать компонент `Button` из библиотеки `react-bootstrap`.

Citations:
[1] https://qna.habr.com/q/1282664
[2] https://stackoverflow.com/questions/60369219/react-bootstrap-button-not-working-properly
[3] https://qna.habr.com/q/676255
[4] https://github.com/react-bootstrap/react-bootstrap/issues/3431
[5] https://ru.hexlet.io/qna/bootstrap/questions/react-bootstrap-ustanovit
[6] https://ru.stackoverflow.com/questions/1235791/react-bootstrap-button
[7] https://github.com/react-bootstrap/react-bootstrap/issues/4461
[8] https://mdbootstrap.com/support/react/error-with-buttons-react/