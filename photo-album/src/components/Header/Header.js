import './Header.css'

const Header = props => {

    return (
        <div className="container-header">
            <header>
                    <div className="item">
                        <img src="https://cdn.pixabay.com/photo/2015/05/31/10/51/technology-791029_960_720.jpg" alt="" />
                        <div className="cover">
                            <div className="">
                                <div className="header-content">
                                    <div className="line"></div>
                                    <h2>Photo album for all the uses</h2>
                                    <h1>The best memories</h1>
                                    <h4>Site with the purpose of store the best photos or videos in a same place</h4>
                                </div>
                            </div>
                        </div>
                    </div>
            </header>
        </div>
    )
}
export default Header;
