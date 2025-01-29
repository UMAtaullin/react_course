import React from 'react';

const Book = (props) => {
  // отрисовка по условию
  if (!props.name) {
    // только null или другую разметку
    return null
  }
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.year}</p>
      <p>{props.price ? <strong>45</strong> : 30}</p>
      <p>{props.children}</p>
    </div>
  )
}

export default Book