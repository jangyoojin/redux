import { createStore } from 'redux';
import reducer from './reducer';
import { useState } from 'react';
import { increase, decrease } from './action';

const store = createStore(reducer);

function App() {
  const [ count, setCount ] = useState(store.getState().count);

  store.subscribe(() => setCount(store.getState().count));

  return (
    <div style={{display:'flex', alignItems: 'center', height: '100vh', width: '100vw', justifyContent: 'center'}}className="App">
      <div style={{fontSize: "100px"}} onClick={() => {
        store.dispatch(increase(1));
      }}>+</div>
      <div style={{fontSize: "100px"}}>{count}</div>
      <div style={{fontSize: "100px"}} onClick={() => {
        store.dispatch(decrease(1));
      }}>-</div>
    </div>
  );
}

export default App;
