import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Profile from './profile';
import WorkPage from './WorkPage';

export default function WebRoutes() {
  return (
    <div>
        <Router>
          <Routes>
            <Route path='/' element={<Profile/>}/>
            <Route path='/displayWork' element={<WorkPage/>}/>
          </Routes>
        </Router>
    </div>
  )
}
