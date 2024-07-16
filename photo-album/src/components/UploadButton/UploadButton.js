import Add from '../../assets/add.png'
import './UploadButton.scss'

const UploadButton = props => {

    return (
        <button className="loadImage" onClick={props.onClick}>
            <img src={Add} width={50} />
            <label className="title-button">{props.title}</label>
        </button>
    )
}
export default UploadButton;
