import React, { useEffect, useState } from 'react';
import '../CSS/main.css';


// Image Imports
import logo2 from '../assets/images/brand/logo/logo-2.svg';
import avatar11 from '../assets/images/avatar/avatar-11.jpg';
import giftbox from '../assets/images/background/giftbox.png';
import checkedmark from '../assets/images/svg/checked-mark.svg';
import brandlogo1 from '../assets/images/svg/brand-logo-1.svg';
import avatar2 from '../assets/images/avatar/avatar-2.jpg';
import avatar3 from '../assets/images/avatar/avatar-3.jpg';
import brandlogo2 from '../assets/images/svg/brand-logo-2.svg';
import avatar4 from '../assets/images/avatar/avatar-4.jpg';
import avatar5 from '../assets/images/avatar/avatar-5.jpg';
import avatar6 from '../assets/images/avatar/avatar-6.jpg';
import brandlogo3 from '../assets/images/svg/brand-logo-3.svg';
import avatar7 from '../assets/images/avatar/avatar-7.jpg';
import avatar8 from '../assets/images/avatar/avatar-8.jpg';
import avatar9 from '../assets/images/avatar/avatar-9.jpg';
import brandlogo4 from '../assets/images/svg/brand-logo-4.svg';
import avatar10 from '../assets/images/avatar/avatar-10.jpg';
import avatar12 from '../assets/images/avatar/avatar-12.jpg';
import brandlogo5 from '../assets/images/svg/brand-logo-5.svg';
import avatar13 from '../assets/images/avatar/avatar-13.jpg';
import avatar14 from '../assets/images/avatar/avatar-14.jpg';
import avatar15 from '../assets/images/avatar/avatar-15.jpg';
import blogimg4 from '../assets/images/blog/blog-img-4.jpg';
import ProfileCard from '../components/Cards/ProfileCard';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import useSidebarToggle from '../hooks/SidebarToggle';
import ProfileOverview from '../components/Profile/ProfileOverview';



const Profile = () => {

  const [showDropdown, setShowDropdown] = useState(false);
  useSidebarToggle();


  return (
    <>

      <main id="main-wrapper" className="main-wrapper">
        <Header showDropdown={showDropdown} setShowDropdown={setShowDropdown} />
        {/* navbar vertical */}
        {/* Sidebar */}
        <Sidebar />
        {/* page content */}
        <ProfileOverview />
      </main>
    </>

  )
}

export default Profile;