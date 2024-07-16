import './Header.scss'

const Header = props => {

    return (
        <div className='headerHero'>
            <header>
                <div className="headerHero__item">
                    <img className='headerHero__image' src="https://cdn.pixabay.com/photo/2015/05/31/10/51/technology-791029_960_720.jpg" alt="" />
                    <div className="headerHero__cover">
                        <div className="headerHero__header-content">
                            <div className="headerHero__line"></div>
                            <h1>Photo album for all the uses</h1>
                            <h2>The best memories</h2>
                            <h3>Site with the purpose of store the best photos or videos in a same place</h3>
                        </div>

                    </div>
                </div>
            </header>
        </div>
    )
}
export default Header;
