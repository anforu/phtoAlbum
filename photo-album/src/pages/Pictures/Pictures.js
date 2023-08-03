import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { storage } from "../../firebase/config";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage"
import { v4 } from 'uuid'
import Lightbox from "yet-another-react-lightbox";
import PhotoAlbum from "react-photo-album";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import './Pictures.css'

const Pictures = () => {
    const params = useParams();//get the params
    const paramName = params.name //current param
    const [imageUpload, setImageUpload] = useState(null);
    const [imageList, setImageList] = useState([])

    /**Function responsable to load the images to the firebase and a local state */
    const uploadImage = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `${paramName}/${imageUpload.name + v4()}`); //save the image into folder created
        uploadBytes(imageRef, imageUpload).then((snapshot) => {//upload the image using the ref
            getDownloadURL(snapshot.ref).then((url) => {//download the image
                setImageList((prev) => [...prev, url])//save the array of images into state
            })
        })
    };

    const fetchImages = () => {
        listAll(ref(storage, paramName)).then((data) => {
            data.items.map(item => {
                getDownloadURL(item).then((url) => {
                    setImageList((prev) => [...prev, url])//save the array of images into state
                })
            })
        })
    }

    useEffect(() => {
        fetchImages()
    }, []);

    const newPhotosUpdated = imageList.slice().map((element, index) => { //declare the new array structure 
        let photo = { src: element, width: 800, height: 600, id: index }
        return photo
    })

    const slides = newPhotosUpdated.map(({ src, width, height, images }) => ({ src, width, height, srcSet: images }));
    const [index, setIndex] = useState(-1);

    return (
        <>
            <div className="pictures">
                <div>
                    <input type="file"
                        onChange={(event) => {
                            setImageUpload(event.target.files[0])
                        }} />
                    <button onClick={uploadImage}> Upload Image</button>
                </div>

                <PhotoAlbum photos={newPhotosUpdated} layout="rows" targetRowHeight={150} onClick={({ index }) => setIndex(index)} />
            </div>

            <Lightbox
                slides={slides}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                // enable optional lightbox plugins
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
            />
        </>
    );
}

export default Pictures;