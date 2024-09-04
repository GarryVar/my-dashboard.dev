import { useState } from 'react';
import './App.css';
import Dashbord from './components/Dashbord/Dashbord';


const  App = ({onChangeFunc, inputValue, items}) => {

  let [valueX, changedValueX] = useState(0);
  let [valueY, changedValueY] = useState(0);


  function changeXYCoordinates (e) { 
    changedValueX(e.clientX);
    changedValueY(e.clientY);
  };

  
  function onShowCoordinates(e) {
    changeXYCoordinates(e)
  };

  return (
    <div className="App">

      <Dashbord
        items={items}
        inputValue={inputValue}
        onChangeFunc={onChangeFunc}
        showCoors={onShowCoordinates}
        valueX={valueX}
        valueY={valueY}/>
    </div>
  )
}

export default App;
