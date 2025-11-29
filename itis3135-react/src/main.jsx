import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Introduction from './Introduction.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import Layout from './Layout.jsx'
import Contract from './Contract.jsx'
import Students from './Students.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />}/>
          <Route path='/Introduction' element={<Introduction />}></Route>
          <Route path='/Contract' element={<Contract />}></Route>
          <Route path='/Students' element={<Students />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
