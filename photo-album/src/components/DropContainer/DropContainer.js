import './DropContainer.css'

const DropContainer = props => {
    return (
        <div class="image-upload">

            <label for="images" class="drop-container" id="dropcontainer">
                <span class="drop-title">Drop files here</span>
                or
                <input type="file" id="images" accept="image/*" required
                    onChange={props.onChange} />
            </label>
        </div>
    )
}

export default DropContainer;