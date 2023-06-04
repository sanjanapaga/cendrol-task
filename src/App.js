import React from 'react'
import CounterCircle from './CounterCircle'
import IncrementContainer from './IncrementContainer'
import Color from './Color'

const App = (props) => {
  return (
    <div className="App">
    <CounterCircle />
    <hr/>
    <IncrementContainer />
    <hr/>
    <Color />
    </div>
  );
};

export default App;

