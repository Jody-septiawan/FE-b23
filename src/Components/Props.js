import logo from './logo.svg';
// import './App.css';
import { Component } from 'react';

// class Header extends Component{
//   render(){
//     return(
//       <h2 align="center">{this.props.header}</h2>
//     )
//   }
// }

// class Content extends Component{

//   getBatch(){
//     return 20 + 3
//   }

//   element(){
//     return <h1>Halo Batch {this.getBatch()} with class</h1>
//   }

//   handleClick(){
//     alert("Dumbways.id")
//   }

//   render(){

//     const company = "Dumbways.id";

//     return(
//       <div className="App">
//         <header className="App-header">

//           <img src={logo} className="App-logo" alt="logo" />

//           {this.element()}

//           <button onClick={this.handleClick}> {company} </button>

//         </header>
//       </div>
//     )
//   }
// }

// class Footer extends Component{
//   render(){
//     return(
//       <h2 align="center">Footer</h2>
//     )
//   }
// }

// class App extends Component{
//   render(){

//     const header = "Header from variabel"

//     return(
//       <div>
//         <Header header={header} />
//         <Content />
//         <Footer /> 
//       </div>
//     )
//   }
// }

function Header({ text, text2, number}){

  // const { text } = props

  return(
    <>
      <h2 align="center">{text}</h2>
      <h2 align="center">{text2}</h2>
      <h2 align="center">{number}</h2>
    </>
  )
}

function Props() {
  const header = "Header with function from variabel 2"
  return (
    <div>
      <Header text={header} number="23" text2="blablabla" />
    </div>
  );
}

export default Props;
