import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
// All pages
import Contact from './pages/Contact';
import About from './pages/About';

import { useDocTitle } from './hooks/CustomHook';
import ScrollToTop from './hooks/ScrollToTop';
import HomeDashboard from './pages/HomeDashboard';
import CompanyDashboard from './pages/CompanyDashboard';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import Signin from './Auth/Signin';
import Signup from './Auth/Signup';
import ForgotPassword from './Auth/ForgotPassword';
import EmailSent from './Auth/EmailSent';
import AddCompany from './pages/addCompany';
import CompanyPage from './pages/CompanyPage';
import EditCompany from './pages/edit-company';


function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/email-confirmation" element={<EmailSent />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/" element={<HomeDashboard />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/dashboard" element={<HomeDashboard />} />
            <Route path="/company-dashboard" element={<CompanyDashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile-edit" element={<ProfileEdit />} />
            <Route path="/add-company" element={<AddCompany />} />
            <Route path="/company/:companyId" element={<CompanyPage />} />
            <Route path="/edit-company/:companyId" element={<EditCompany />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}


export default App;

