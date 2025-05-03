import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ProfilePage from './components/ProfilePage';
import WorkPage from './components/WorkPage';

export default function WebRoutes() {
  return (
    <div>
        <Router>
          <Routes>
            <Route path='/' element={<WorkPage/>}/>
            {/* <Route path='/displayWork' element={<WorkPage/>}/> */}
          </Routes>
        </Router>
    </div>
  )
}
