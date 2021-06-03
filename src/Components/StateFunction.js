// import '../App.css';
import { useState } from 'react';

function Counter({number}){

  number = parseInt(number)

  const [counter, setCounter] = useState(number);
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

  const gambar = "https://2.bp.blogspot.com/-UwFOGr5oq4Q/VlvY0hrCtOI/AAAAAAAAADw/p4nFXnK-NpA/s1600/wp1.png";

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
          <img width="150" src={gambar} alt="gambar" />
      </div>
    </div>
  )
}

function StateFunction(){
    return(
      <>
        <Counter number="89" />
      </>
    )
}

export default StateFunction;
