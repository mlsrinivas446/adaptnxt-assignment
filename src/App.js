import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MyDashboard from './components/MyDashboard/MyDashboard.js'

import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyDashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
