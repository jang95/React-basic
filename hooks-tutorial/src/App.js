// import { useState } from 'react';
import './App.css';
// import Counter from './Counter';
// import Info from './info';
import InfoReducer from './Info_reducer';
// import Average from './Average';

const App = () => {
  // const [visible, setVisible] = useState(false);
  return (
    // <div>
    //   <button onClick={() => {
    //     setVisible(!visible);
    //   }}
    //   >
    //     {visible ? '숨기기' : '보이기'}
    //     </button>
    //     <hr />
    //     {visible && <Info></Info>}
    // </div>

    // <Counter/>
    <InfoReducer />
    // <Average/>
  );
}

export default App;
