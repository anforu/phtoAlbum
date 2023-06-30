import React, { useEffect, useState } from "react";
import Footer from '../../components/Footer/Footer'
import Pictures from "../Pictures/Pictures";
import Pet from '../../assets/pets.jpeg';
import Family from '../../assets/family.jpeg';
import { useNavigate } from 'react-router-dom';
import Modal from "../../components/Modal/Modal";
import './HomePage.css';

const HomePage = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false)
    const [list, setList] = useState(['Add New Album']);
    const [albumNames, setAlbumNames] = useState('')

    const openFolder = () => {
        navigate('/pictures');
    }

    const addFolders = (name) => {
        let tempArr = list;
        tempArr.push(name);//push the value in the new variable
        setList(tempArr);//set the value in the state[]
        setAlbumNames('') //clean input
        setShow(false)//hide popup
    }

    return (
        <div className="homepage">
            <header className="header">My albums</header>
            <div className="container" >
                {list.map((album, index) => {
                    return (
                        <div className="container-album" key={index}
                            onClick={() => { index !== 0 ? openFolder() : setShow(true) }}>
                            <label>{album}</label>
                            <img src={Pet} alt="photo" width="100" height="100" />
                        </div>
                    )
                })
                }
            </div>

            <Modal title='Title modal' show={show} onClose={() => setShow(false)}>
                <div className="container-input">
                    <label>Type a name:</label>
                    <input
                        value={albumNames}
                        onChange={(e) => {
                            setAlbumNames(e.target.value)
                        }
                        }
                        placeholder="Name"
                    />
                    <button onClick={() => addFolders(albumNames)}>Add</button>
                </div>
            </Modal>
            <Pictures />
            <Footer />
        </div>
    )
}
export default HomePage;