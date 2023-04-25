import { useState } from "react";
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
    const photos = [
        { src: "/images/family.jpeg", width: 800, height: 600 },
        { src: "/images/pets.jpeg", width: 800, height: 600 },
        { src: "/images/lion.jpg", width: 800, height: 600 },

    ];
    const slides = photos.map(({ src, width, height, images }) => ({ src, width, height, srcSet: images }));
    const [index, setIndex] = useState(-1);

    return (
        <>
            <div className="pictures">
                <PhotoAlbum photos={photos} layout="rows" targetRowHeight={150} onClick={({ index }) => setIndex(index)} />
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