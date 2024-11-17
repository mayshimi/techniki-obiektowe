import React, { useState } from 'react';
import './Counter.css'; // Plik CSS opcjonalny, możesz dodać stylizację licznika tutaj.

function Counter() {
  const [count, setCount] = useState(0);

  // Funkcja zwiększająca licznik
  const increment = () => {
    setCount(count + 1);
  };

  // Funkcja zmniejszająca licznik
  const decrement = () => {
    setCount(count - 1);
  };

  // Funkcja resetująca licznik do 0
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="Counter">
      <h2>Licznik</h2>
      <p>Aktualna wartość licznika: <strong>{count}</strong></p>
      <div>
        <button onClick={increment}>Zwiększ</button>
        <button onClick={decrement}>Zmniejsz</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;