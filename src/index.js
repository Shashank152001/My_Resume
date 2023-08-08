import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'antd/dist/reset.css';

import FrontPage from './Pages/FrontPage';
import AboutMePage from './Pages/AboutMePage'
import Education from './Pages/Education'
import Abilities from './Pages/Abilities'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import Navbar from './Pages/Components/Navbar';
import Certifications from './Pages/Certifications';
import DownloadResume from './Pages/Components/DownloadResume';
import Achievements from './Pages/Achievements';
import Experience from './Pages/Experience';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <FrontPage/>
    <Navbar/>
    <AboutMePage/>
    <Education/>
    <Abilities/>
    <Projects/>
    <Experience/>
    <Achievements/>
    <Certifications/>
    <Contact/>
    <DownloadResume/>
  </>
);

