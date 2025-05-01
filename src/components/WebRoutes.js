import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Profile from './components/profile';

export default function WebRoutes() {
  return (
    <div>
        <Router>
          <Routes>
            <Route path='/' element={<Profile/>}/>
          </Routes>
        </Router>
    </div>
  )
}
