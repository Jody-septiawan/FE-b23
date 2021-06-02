import '../App.css';
import { useState } from 'react';

function Counter(){

  const [counter, setCounter] = useState(5);
  const [company, setCompany] = useState("Dumbways.id");
  const [user, setUser] = useState(
    {
      fullName: 'User Fullname here',
      email: 'Email here',
      password: 'Password here'
    }
  );

  function handleIncrement(){
    setCounter(counter + 1)

    setCompany("Increment")

    setUser({
      fullName: 'Ilham',
      email: 'ilham@mail.com',
      password: '1234'
    })
  }

  function handleDecrement(){
    setCounter(counter - 1)
    setCompany("Decrement")
    setUser({
      fullName: '',
      email: '',
      password: ''
    })
  }

  return(
    <div className="App">
      <div className="App-header">
          <button onClick={handleIncrement}>Increment</button>
          <button onClick={handleDecrement}>Decrement</button>
          <p>{counter}</p>
          <p>{company}</p>
          <div>
            <p><small>Full Name: </small> {user.fullName}</p>
            <p><small>Email:</small> {user.email}</p>
            <p><small>Password:</small> {user.password}</p>
          </div>
      </div>
    </div>
  )
}

function StateFunction(){
    return(
      <Counter number="77" />
    )
}

export default StateFunction;
