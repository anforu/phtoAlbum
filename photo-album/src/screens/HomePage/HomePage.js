import React, { useEffect, useState } from "react";
import Footer from '../../components/Footer/Footer';
import Pet from '../../assets/pets.jpeg';
import Family from '../../assets/family.jpeg';
import './HomePage.css';

const HomePage = () => {
    const openFolder = () => {
        console.log('Handler to open folder ');
    }

    return (
        <div className="homepage">
            <header>My albums</header>
            <div className="container" 
            // onClick={()=> openFolder()}
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
            <Footer />
        </div>
    )
} 
export default HomePage;