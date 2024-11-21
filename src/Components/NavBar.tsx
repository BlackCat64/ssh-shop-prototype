import React from 'react';
import { BrowserRouter as Router,
    Route,
    Routes,
    Link} from "react-router-dom";

//Props make things reactable, as this is in every shop element could be seen as redundant
interface Props {
    barName: string
    barNameLink?: string
}

//Element that stays at the top of the shop home page, likely all subsets of shop should have this element too.
function NavBar({barName, barNameLink} : Props) {
    return (
        <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: '#e3f2fd' }} data-bs-theme="light">
            <div className="container-fluid">
                <Link className="navbar-brand" to={barNameLink || '/'}>
                    <img src="/favicon.ico" alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
                        {barName}
                    </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to='/'>Dashboard</Link>
                        </li>
                    </ul>
                    <form className="d-flex mx-auto" style={{ flex: '1 1 auto', maxWidth: '600px' }} role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ width: '100%' }}/>
                        <button className="btn btn-outline-success" type="submit">
                            Search
                        </button>
                    </form>

                    <div className="ms-auto">
                        <Link to="/checkout" className="nav-link">
                            <img
                                src="/Images/cart-icon.png"
                                alt="Shopping cart"
                                style={{ width: '30px', height: '30px' }}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;