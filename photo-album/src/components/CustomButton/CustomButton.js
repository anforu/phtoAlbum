import './CustomButton.scss'

const CustomButton = props => {
    return (
        <button className='customButton' onClick={props.onClick} key={props.key} disabled={props.disabled}>{props.title}</button>
    )
}
export default CustomButton;