import './css/Global.css';
import {useState} from 'react'

// import Props from './Components/Props';
// import StateClass from './Components/StateClass';
// import StateFunction from './Components/StateFunction';
import Login from './Components/Login';
import List from './Components/List';

function App() {

  const [isLogin] = useState(true)

  return(
    <>
      { isLogin ?  <List /> : <Login /> }
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
