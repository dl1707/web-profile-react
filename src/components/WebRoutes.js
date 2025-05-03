import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ProfilePage from './ProfilePage';
import WorkPage from './WorkPage';

export default function WebRoutes() {
  return (
    <div>
        <Router>
          <Routes>
            <Route path='/' element={<ProfilePage/>}/>
            <Route path='/displayWork' element={<WorkPage/>}/>
          </Routes>
        </Router>
    </div>
  )
}
