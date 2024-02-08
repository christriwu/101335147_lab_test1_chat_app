import { useState } from 'react'
import Login from './components/Login'
import './App.css'

function App() {

  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
