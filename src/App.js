import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
// import ReactDOM  from 'react';
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Project from './components/Project';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
    return (
        <div className="">
            <BrowserRouter>
                
                <Navigation />
                
                <Routes>
                    
                    <Route path='/project' element={<Project/>}/>
                    <Route path='/aboutme' element={<AboutMe/>}/>
                    <Route path='/resume' element={<Resume/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='/footer' element={<Footer/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>


        </div>
    );
}

export default App;
