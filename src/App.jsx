
import { Sidebar } from './pages/sidebar';
import { Dashboard } from './pages/dashboard';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import './App.css'

function App() {
  
  return (
    <>
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/sidebar' element={<Sidebar/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
      </BrowserRouter>
    </div>
     
    </>
  )
}

export default App
