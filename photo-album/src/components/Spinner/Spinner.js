import { BallTriangle } from 'react-loader-spinner'
import "./Spinner.css";
const Spinner = props => {
    return (
        <div className='container-spinner'>
            <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="#4fa94d"
                ariaLabel="ball-triangle-loading"
                wrapperClass={{}}
                wrapperStyle=""
                visible={props.visible}
            />
        </div>
    )
}

export default Spinner;