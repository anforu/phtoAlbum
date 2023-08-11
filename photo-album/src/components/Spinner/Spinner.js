import { BallTriangle, RotatingLines } from 'react-loader-spinner'
import "./Spinner.css";

const Spinner = props => {

    const handlerSpinner = (props) => {
        switch (props.type) {
            case 'triangle':
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
            case 'circle-lines':
                return (<RotatingLines
                    strokeColor="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="96"
                    visible={props.circle_visible}
                />)

            default: return (
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
    }
    return (
        handlerSpinner(props)
    )
}

export default Spinner;