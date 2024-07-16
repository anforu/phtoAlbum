import './DropContainer.scss'

const DropContainer = props => {
    return (
        <div className="image-upload">

            <label for="images" className="drop-container" id="dropcontainer">
                <span className="drop-title">Drop files here</span>
                or
                <input type="file" id="images" accept="image/*" required
                    onChange={props.onChange} />
            </label>
        </div>
    )
}

export default DropContainer;