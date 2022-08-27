import React from 'react';
// import Counter from './components/Counter';
// import Todos from './components/Todos';
import TodosContainer from './containers/TodosContainer';
import CounterContainer from './containers/CounterContainer';

const App = () => {
  return (
    <div>
      <CounterContainer number={0} />
      <hr />
      <TodosContainer />
    </div>
  );
};

export default App;
