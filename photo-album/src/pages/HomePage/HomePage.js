import React, { useEffect, useState } from "react";
import Footer from '../../components/Footer/Footer'
import Pet from '../../assets/pets.jpeg';
import { useNavigate } from 'react-router-dom';
import Modal from "../../components/Modal/Modal";
import './HomePage.css';
import { ref, listAll } from "firebase/storage"
import { storage } from "../../firebase/config";
import Spinner from '../../components/Spinner/Spinner'

const HomePage = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false)
    const [albumNames, setAlbumNames] = useState('')

    const [folderList, setFolderList] = useState(['Add New Album'])

    const listRef = ref(storage);

    const [nameUpdated, setNameUpdated] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        return fetchData()
    }, [])

    const fetchData = () => {
        setLoading(true)
        let initialFolder = ['Add New Album']
        listAll(listRef).then((response) => {
            response.prefixes.map((value) => {
                let names = value._location.path_
                initialFolder.push(names)
                setFolderList(names)
                setLoading(false)
                return setNameUpdated(initialFolder)
            })
        }).catch(e => console.log('Error trying to render the array of folders ', e))

    }

    const openFolder = (name, position) => {
        navigate(`/pictures/${name}`);
    }

    const addFolders = (name) => {
        let tempArr = nameUpdated;
        tempArr.push(name);//push the value in the new variable
        setNameUpdated(tempArr)//set the value in the state[]
        setAlbumNames('') //clean input
        setShow(false)//hide popup
    }

    return (
        <>
            {loading ? (<Spinner visible={loading} />) :
                (<div className="homepage">
                    <header className="header">My albums</header>
                    <div className="container" >
                        {nameUpdated.map((album, index) => {
                            return (
                                <div className="container-album" key={index}
                                    onClick={() => { index !== 0 ? openFolder(album, index) : setShow(true) }}>
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
                    <Footer />
                </div>)
            }
        </>
    )
}
export default HomePage;