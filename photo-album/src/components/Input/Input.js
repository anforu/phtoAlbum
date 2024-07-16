import './Input.scss'

const Input = props => {

    return (
        <div className="container-input">
            <input
                className='container-input__input'
                type={props.type}
                id={props.id}
                required onChange={props.onChange}
                value={props.value}
                placeholder={props.placeholder} />
            <label className='container-input__title'>
                {props.title}
            </label>
        </div>
    )
}
export default Input;
