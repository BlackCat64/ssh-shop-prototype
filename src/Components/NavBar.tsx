import React from 'react';
import { BrowserRouter as Router,
    Route,
    Routes,
    Link,
    useNavigate} from "react-router-dom";

//Props make things reactable, as this is in every shop element could be seen as redundant
interface Props {
    barName: string
    barNameLink?: string
}

//Element that stays at the top of the shop home page, likely all subsets of shop should have this element too.
function NavBar({barName, barNameLink} : Props) {
    const navigate = useNavigate();

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const query = formData.get('search')?.toString() || '';
        if (query.trim()) {
            navigate(`/shop/results?query=${encodeURIComponent(query)}`);
        }
    };

    return (
        <>
        <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: '#c1d8e8' }} data-bs-theme="light">
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
                    <form
                        className="d-flex mx-auto"
                        style={{ flex: '1 1 auto', maxWidth: '600px' }}
                        role="search"
                        onSubmit={handleSearch} // Use the custom handler
                    >
                        <input
                            className="form-control me-2"
                            type="search"
                            name="search"
                            placeholder="Find any SSH Product"
                            aria-label="Search"
                            style={{ width: '100%' }}
                        />
                        <button className="btn btn-outline-success" type="submit">
                            Search
                        </button>
                    </form>


                    <div className="d-flex align-items-center ms-auto">
                        <Link to="/shop/settings" className="nav-link">
                            <img className="accountPicture"
                                src="/Images/blank-profile-picture.jpg"
                                alt="Account Settings"
                                style={{ width: '40px', height: '40px', marginRight: '10px' }}
                            />
                        </Link>
                        <Link to="/shop/basket" className="nav-link">
                            <img
                                src="/Images/cart-icon.png"
                                alt="Basket"
                                style={{ width: '30px', height: '30px' }}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
            {/* pagebar, put under navbar as would be a redundant component*/}
            <ul className="nav nav-pills nav-fill"   style={{
                backgroundColor: "#d1e3f0", marginTop: "35px", padding: 20
            }}>
                <li className="nav-item dropdown left">
                    <button className="nav-link">Dropdown</button>
                </li>
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">Active</a>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="*">
                            Link
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="*">
                             Disabled
                    </Link>
                </li>
            </ul>
    </>
    );
}

export default NavBar;