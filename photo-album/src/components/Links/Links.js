import './Links.scss'

const Links = props => {
    return (
        <div className='links'>
            <a class="link" aria-label={props.ariaLabel} href={props.href}>{props.title}</a>
        </div>
    )
}

export default Links;