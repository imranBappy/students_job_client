
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#">Navbar scroll</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div style={{justifyContent: 'flex-end'}} className="collapse navbar-collapse" id="navbarScroll">
                <ul style={{marginRight: '0px !important'}} className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll ">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Pricing</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Blog</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Contact Us</a>
                    </li>
                    
                </ul>
               
                </div>
            </div>
            </nav>
            <br />
        </div>
    );
};

export default Navbar;