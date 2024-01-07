import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Form from './components/Form'
import Home from './components/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div style={{textAlign:"center"}}>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/form' element={<Form />}></Route>
      </Routes>

      </div>
    
    </>
  )
}

export default App