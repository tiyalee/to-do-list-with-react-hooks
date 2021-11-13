import React from 'react'
import "./App.css"
import Header from './components/Header'
import LoginForm from './components/LoginForm'
import TodoList from './components/TodoList'
let login=true;

const App = () => {

  if(login){
    return (
      <div className="app">
        <TodoList />
      </div>
    )
  }else{
    return (
      <div className="app">
        <Header />
        <LoginForm />
      </div>
    )
  }
  
}

export default App;
