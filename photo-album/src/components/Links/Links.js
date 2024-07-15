import './Links.css'

const Links = props => {
    return (
        <div className='container'>
            <a class="link" aria-label={props.ariaLabel} href={props.href}>{props.title}</a>
        </div>
    )
}

export default Links;