import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <>
      <p>Counter</p>
      <p>
        <button type="button">Click me! (0)</button>
      </p>
      <p>
        {[1, 2, 3, 4, 5].map((i) => <button type="button">{i}</button>)}
      </p>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
