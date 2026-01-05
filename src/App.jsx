
import './App.css'

import HomePage from './Login_Nav_Page/HomePage';
import LoginPage from './Login_Nav_Page/LoginPage';
import SignUpPage from './Login_Nav_Page/SignUpPage';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

import TodoList from './TodoApp/TodoList';

function App() {

  

 
  return (
    //  <BrowserRouter>
    //  <Routes>
    //    <Route path='/' element={<SignUpPage/>}/>
    //    <Route path='/login' element={<LoginPage/>}/>
    //    <Route path='/home' element={<HomePage/>}/>
    // </Routes>
    //  </BrowserRouter>
    <TodoList/>
  )
}

export default App

      