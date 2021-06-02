import './App.css';
import {useState} from 'react'
// import Props from './Components/Props';
import StateClass from './Components/StateClass';
import StateFunction from './Components/StateFunction';
import Login from './Components/Login';

function App() {

  const [isLogin] = useState(true)

  const number = 1;

  return(
    <>
      { number == 1 ?  <StateFunction /> : <Login /> }
    </>
  )

  // if(isLogin){
  //   return (
  //     <>
  //       {/* <Props /> */}
  //       {/* <StateClass /> */}
  //       <StateFunction />
  //     </>
  //   );
  // }else{
  //   return <Login />
  // }
}

export default App;
