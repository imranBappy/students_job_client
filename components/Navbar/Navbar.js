import Link from 'next/link'
import styles from '../../styles/Home.module.css'
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark navbar-dark bg-dark">
            <div className="container">
                <Link href="/"> 
                <a className="navbar-brand" > Student </a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div 
                className={`collapse navbar-collapse ${styles.nav__left}`} id="navbarScroll">
                <ul 
                className={`navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll ${styles.m__r0}`}>
                    <li className="nav-item">
                    <Link href="/"> 
                        <a className="nav-link active" >Home</a>
                    </Link>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Pricing</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Blog</a>
                    </li>
                    <li className="nav-item">
                    <Link href="/login"> 
                        <a className="nav-link" >Login</a>
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link href="/register"> 
                        <a className="nav-link" >Register</a>
                    </Link>
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