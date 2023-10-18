import './Input.css'

const Input = props => {

    return (
        <div className="container-custom-input">
            <input
                className='input'
                type={props.type}
                id={props.id}
                required onChange={props.onChange}
                value={props.value}
                placeholder={props.placeholder} />
            <label className='title-input'>
                {props.title}
            </label>
        </div>
    )
}
export default Input;
