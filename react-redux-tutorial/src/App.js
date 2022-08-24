import React from 'react';
// import Counter from './components/Counter';
import Todos from './components/Todos';
import CounterContainer from './containers/CounterContainer';

const App = () => {
  return (
    <div>
      <CounterContainer number={0} />
      <hr />
      <Todos />
    </div>
  );
};

export default App;
