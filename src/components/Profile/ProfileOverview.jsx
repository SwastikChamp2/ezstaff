import React from 'react';

// Image Imports
import logo2 from '../../assets/images/brand/logo/logo-2.svg';
import avatar11 from '../../assets/images/avatar/avatar-11.jpg';
import checkedmark from '../../assets/images/svg/checked-mark.svg';
import ProfileCard from '../Cards/ProfileCard';

const ProfileOverview = () => {

    const profilesData = [
        {
            heading: "Sales Manager at Morgan Stanley",
            subHeading: "Total: 3 years of experience",
            imageUrl: "https://pbs.twimg.com/profile_images/1631347869687898142/ATwo7QZZ_400x400.jpg"
        },
        {
            heading: "VP of Sales in Numito Fintech",
            subHeading: "Total: 4 years of experience",
            imageUrl: "https://cdn.dribbble.com/userupload/3640476/file/still-e81850806ed51cbc833ede438bb7f10c.png"
        },
        {
            heading: "Sales Head at Gemini Capital",
            subHeading: "Total: 1 year of experience",
            imageUrl: "https://i.tracxn.com/logo/company/gD0eqGyF_400x400_321d0c6f-1906-4dcc-87f6-361d7d786523.jpg"
        },
        {
            heading: "Junior Salesperson at Aquarich",
            subHeading: "Total: 6 months of experience",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-J9cAjb8TYBabKgoJ-Jtr5tfbowqK95i-1w&s"
        }
    ];

    const educationData = [
        {
            heading: "Indian Institute of Management (IIM) Ahmedabad",
            subHeading: "Master of Business Administration (MBA) - Marketing & Strategy",
            imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/IIM%2C_Ahmedabad_Logo.svg/1200px-IIM%2C_Ahmedabad_Logo.svg.png"
        },
        {
            heading: "Indian Institute of Technology (IIT) Bombay",
            subHeading: "Bachelor of Technology (B.Tech) - Computer Science",
            imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Indian_Institute_of_Technology_Bombay_Logo.svg/1200px-Indian_Institute_of_Technology_Bombay_Logo.svg.png"
        },
        {
            heading: "Delhi Public School, RK Puram",
            subHeading: "Class 12th - Science Stream (CBSE)",
            imageUrl: "https://pbs.twimg.com/profile_images/1151384177067134977/s5sAwv6B_400x400.png"
        },
        {
            heading: "Delhi Public School, RK Puram",
            subHeading: "Class 10th - CBSE Board",
            imageUrl: "https://pbs.twimg.com/profile_images/1151384177067134977/s5sAwv6B_400x400.png"
        }
    ];



    return (
        <div>
            {/* row */}
            <div className="row">
                <div className="col-xl-6 col-lg-12 col-md-12 col-12 mb-5">
                    {/* card */}
                    <div className="card h-100">
                        {/* card body */}
                        <div className="card-header">
                            <h4 className="mb-0">About Me</h4>
                        </div>
                        <div className="card-body">
                            {/* card title */}
                            <h5 className="text-uppercase">Bio</h5>
                            {/* text */}
                            <p className="mt-2 mb-6">
                                A results-driven Sales Manager at Morgan Stanley with a decade of experience in financial sales and client relationship management.
                            </p>
                            {/* row */}
                            <div className="row">
                                <div className="col-12 mb-5">
                                    {/* text */}
                                    <h5 className="text-uppercase">Position</h5>
                                    <p className="mb-0">Manager at Morgan Stanley</p>
                                </div>
                                <div className="col-6 mb-5">
                                    <h5 className="text-uppercase">Phone</h5>
                                    <p className="mb-0">+91 8899776655</p>
                                </div>
                                <div className="col-6 mb-5">
                                    <h5 className="text-uppercase">
                                        Date of Birth
                                    </h5>
                                    <p className="mb-0">01.10.1997</p>
                                </div>
                                <div className="col-6">
                                    <h5 className="text-uppercase">Email</h5>
                                    <p className="mb-0">jitu@gmail.com</p>
                                </div>
                                <div className="col-6">
                                    <h5 className="text-uppercase">Location</h5>
                                    <p className="mb-0">Ahmedabad, India</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-xl-6 col-lg-12 col-md-12 col-12 mb-5" >
                    {/* card */}
                    <div className="card">
                        <div className="card-header">
                            <h4 className="mb-0">About Me</h4>
                        </div>
                        {/* card body */}
                        <div className="card-body" style={{ minHeight: '396px' }}>
                            {/* card title */}
                            <div className="d-md-flex justify-content-between align-items-center mb-4">
                                <p className="mt-2 mb-6">
                                    As a results-driven Sales Manager at Morgan Stanley, I bring over a decade of experience in financial sales and client relationship management. Throughout my career, I have been dedicated to driving revenue growth, building high-performing teams, and delivering exceptional client solutions.
                                    <br /> <br />
                                    With a strong foundation in financial markets, investment strategies, and wealth management, I have successfully guided clients in making informed decisions that align with their financial goals. My expertise extends to sales strategy development, business expansion, and team leadership, ensuring sustained success in a competitive industry.
                                    <br /> <br /> <br />

                                </p>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="col-xl-6 col-lg-12 col-md-12 col-12 mb-5">
                    {/* card */}
                    <ProfileCard title="My Experience" profiles={profilesData} />
                </div>


                <div className="col-xl-6 col-lg-12 col-md-12 col-12 mb-5">
                    {/* card */}
                    <ProfileCard title="My Education" profiles={educationData} />
                </div>








            </div>
        </div>
    );
};

export default ProfileOverview;