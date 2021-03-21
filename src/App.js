import logo from './logo.svg';
import react from 'react';
import './App.css';


class App extends react.Component
{
  render(){
    return (
      <div className="gray-background">
          <img src={logo} lat="logo"></img>
          <h2>Let's develop management system!</h2>
      </div>
    );
  }
}

export default App;
