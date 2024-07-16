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
import './Pictures.scss'
import Spinner from '../../components/Spinner/Spinner'
import UploadButton from "../../components/UploadButton/UploadButton";
import DropContainer from "../../components/DropContainer/DropContainer"

const Pictures = () => {
    const params = useParams();//get the params
    const paramName = params.name //current param
    const [imageUpload, setImageUpload] = useState(null);
    const [imageList, setImageList] = useState([])
    const [loading, setLoading] = useState(false)
    const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];
    
    /**Function responsable to load the images to the firebase and a local state */
    const uploadImage = () => {
        if (imageUpload == null) return; //if is empty nothing happened
        setLoading(true)
        const imageRef = ref(storage, `${paramName}/${imageUpload.name + v4()}`); //save the image into folder created
        uploadBytes(imageRef, imageUpload).then((snapshot) => {//upload the image using the ref
            getDownloadURL(snapshot.ref).then((url) => {//download the image
                setImageList((prev) => [...prev, url])//save the array of images into state
            })
        })
        setLoading(false)
    };

    const fetchImages = () => {
        setLoading(true)
        listAll(ref(storage, paramName)).then((data) => {
            data.items.map(item => {
                return getDownloadURL(item).then((url) => {
                    setImageList((prev) => [...prev, url])//save the array of images into state
                })
            })
            setLoading(false)
        })
    }

    useEffect(() => {
        fetchImages();
    }, []);

    const newPhotosUpdated = imageList.slice().map((element, index) => { //declare the new array structure 
        let photo = { src: element, width: 800, height: 600, id: index }
        return photo
    })

     const slides = newPhotosUpdated.map(({ src, width, height, images }) => ({ src, width, height, srcSet: images }));
    // const slides = newPhotosUpdated.map(
    //     ({ asset, width, height, images }) =>
    //       ({
    //         src: images,
    //         width,
    //         height,
    //         srcSet: breakpoints.map((breakpoint) => ({
    //           src: images,
    //           width: breakpoint,
    //           height: Math.round((height / width) * breakpoint),
    //         })),
    //       }) 
    //   );
    const [index, setIndex] = useState(-1);

    return (
        <>
            {/* {loading ? (<Spinner type='triangle' visible={loading} />) : */}
            <div>
                <div className="pictures">
                    <div className="pictures__container-load-images">
                        <DropContainer onChange={(event) => {
                            setImageUpload(event.target.files[0])
                        }} />
                        <UploadButton title="Upload Image"
                            onClick={uploadImage} />
                    </div>
                    <div className="pictures__images">
                        <PhotoAlbum photos={newPhotosUpdated} layout="rows" targetRowHeight={150} onClick={({ index }) => setIndex(index)} />
                    </div>
                </div>
                {loading ? (<Spinner type='triangle' visible={loading} />) :
                    <Lightbox
                        slides={slides}
                        open={index >= 0}
                        index={index}
                        close={() => setIndex(-1)}
                        // enable optional lightbox plugins
                        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                    />
                }
            </div>
            {/* } */}
        </>
    );
}

export default Pictures;