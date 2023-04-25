import React, { useEffect, useState } from "react";
import Footer from '../../components/Footer/Footer'
import Pictures from "../Pictures/Pictures";
import Pet from '../../assets/pets.jpeg';
import Family from '../../assets/family.jpeg';
import { useNavigate } from 'react-router-dom';

import './HomePage.css';

const HomePage = () => {
    const navigate = useNavigate();

    const openFolder = () => {
        navigate('/pictures');
        console.log('Handler to open folder ');
        
    }

    return (
        <div className="homepage">
            <header className="header">My albums</header>
            <div className="container" 
            onClick={()=> openFolder()}
            >
                <div className="container-album">
                    <label>Family</label>
                    <img src={Pet} alt="photo" width="100" height="100"/>
                </div>
                <div className="container-album">
                    <label>Pets</label>
                    <img src={Family} alt="photo" width="100" height="100"/>
                </div>
                <div className="container-album">
                    <label>Family</label>
                    <img src={Pet} alt="photo" width="100" height="100"/>
                </div>
                <div className="container-album">
                    <label>New Album</label>
                    <img src={Family} alt="photo" width="100" height="100"/>
                </div>
                
            </div>
            <Pictures />
            <Footer />
        </div>
    )
} 
export default HomePage;