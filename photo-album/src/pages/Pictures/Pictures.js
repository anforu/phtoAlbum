import { useState, useEffect } from "react";
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
    const [imageUpload, setImageUpload] = useState(null);
    const [imageList, setImageList] = useState([])
    const imageListRef = ref(storage, "images/")

    const uploadImage = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImageList((prev) => [...prev, url])
            })
        })
    };

    useEffect(() => {
        listAll(imageListRef).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageList((prev) => [...prev, url])
                })
            })
        })
    }, [])


    var dup_array = imageList.slice();
    const newPhotosUpdated = dup_array.map((element, index) => {
        let photo = { src: element, width: 800, height: 600, id: index }
        return photo
    })

    console.log('FINAL CLONED: ', newPhotosUpdated)

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