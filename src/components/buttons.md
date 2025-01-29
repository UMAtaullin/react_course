Если размер кнопок в вашем приложении всё равно зависит от длины текста, вы можете установить фиксированную ширину для кнопок, чтобы они выглядели одинаково, независимо от содержимого. Это можно сделать с помощью CSS. 

## Установка фиксированной ширины кнопок

Вы можете использовать класс Bootstrap `w-100`, чтобы кнопки занимали всю ширину родительского элемента, или задать фиксированную ширину с помощью CSS. 

### Пример кода с фиксированной шириной

Вот обновлённый код с фиксированной шириной для кнопок:

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
    this.plus = this.plus.bind(this);
    this.minus = this.minus.bind(this);
  }

  plus() {
    this.setState({ count: this.state.count + 1 });
  }

  minus() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div className='d-flex justify-content-center mt-3'>
        <Button 
          className='p-2' 
          variant='primary' 
          onClick={this.plus}
          style={{ width: '100px' }} // Задаем фиксированную ширину
        >
          Plus
        </Button>
        <h2 className='p-2'>{this.state.count}</h2>
        <Button 
          className='p-2' 
          variant='success' 
          onClick={this.minus}
          style={{ width: '100px' }} // Задаем фиксированную ширину
        >
          Minus
        </Button>
      </div>
    );
  }
}

export default App5;
```

### Объяснение изменений

1. **Фиксированная ширина**: Я добавил стиль `style={{ width: '100px' }}` к каждой кнопке, что устанавливает их ширину на 100 пикселей. Вы можете изменить это значение на любое другое, чтобы достичь желаемого размера.
   
2. **Класс `btn-block` убран**: Поскольку мы теперь используем фиксированную ширину, использование класса `btn-block` не требуется.

### Альтернативный подход

Если вы хотите, чтобы кнопки были одинакового размера и адаптировались к различным размерам экрана, вы можете использовать классы Bootstrap для управления шириной:

```javascript
<Button 
  className='p-2 w-25' // Используем w-25 для ширины в 25% от родителя
  variant='primary' 
  onClick={this.plus}
>
  Plus
</Button>
```

Этот подход будет адаптивным и будет изменять размер кнопок в зависимости от ширины родительского контейнера.

Теперь ваши кнопки будут одинакового размера и не будут зависеть от длины текста внутри них!