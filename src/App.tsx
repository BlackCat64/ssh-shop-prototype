import React from 'react';
import './App.css';
import NavBar from './Components/NavBar'
import  CarouselAP from './Components/CarouselAP'
import { BrowserRouter as Router,
  Route,
  Routes,
  Link} from "react-router-dom";


//Basically main, used only to route pages
function App() {
  return (
      <Router>
        <div>
          <ul>
          </ul>
          <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/shop" element={<ShopHome/>}/>
            {/*Nested routes, basically everything stored in ShopHome*/}
            <Route path="results" element={<SearchResults/>}/>
            <Route path="basket" element={<Basket />}/>
            <Route path="checkout" element={<Checkout />}/>
          </Routes>
        </div>

      </Router>
  );
}

//work on pages in their respective functions

//Dashboard function is like homepage, just use to have button to Shop
const Dashboard = () => (
    <div>
      <li>
        <Link to="/shop">ShopHome</Link>
      </li>
    </div>
)

//Main page for us, will be adding items search bar etc
const ShopHome = () => (
    <div>
    <NavBar barName={"SSH Shop"} barNameLink="/shop"/>
        <CarouselAP imageOne="/Images/CameraFillerPhoto.jpg"/>
      <ul>
        <li>
          <Link to="results">SearchResults</Link>
        </li>
        <li>
          <Link to="basket">Basket</Link>
        </li>
        <li>
          <Link to="checkout">Checkout</Link>
        </li>
      </ul>
    </div>
)

//variable page that changes based on searches
const SearchResults = () => (
    <div>
        <NavBar barName={"SSH Shop"} barNameLink="/shop"/>
        <button>Hello</button>
    </div>
)

//just displays items added to basket, and price(?)
const Basket = () => (
    <div>

    </div>
)

//pretend to get user information and display price
const Checkout = () => (
    <div>

    </div>
)
export default App;
