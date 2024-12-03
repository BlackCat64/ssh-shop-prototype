import React from 'react';
import './App.css';
import { BrowserRouter as Router,
  Route,
  Routes,
  Link} from "react-router-dom";
import Card from "./Components/Card";

import FilterSelect from './Components/FilterSelect';

import { Outlet } from 'react-router-dom';

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
            <Route path="/shop/results" element={<SearchResults/>}/>
            <Route path="/shop/basket" element={<Basket />}/>
            <Route path="/shop/checkout" element={<Checkout />}/>
            <Route path="*" element={<h1>404 - Page Not Found</h1>} />
          </Routes>
        </div>

      </Router>
  );
}

//work on pages in their respective functions

//Dashboard function is like homepage, just use to have button to Shop
const Dashboard = () => (
    <div className="dashboard">
        <div className="card-container">
            <Card
                title={"Ssh Shop"}
                text={"Purchase our state of the art SHH products and general student essentials here!"}
                link={"/shop"}
            />
            <Card
                title={"Accounts"}
                text={"Manage your account, edit deliveries or change your subscription."}
                link={"*"}
            />
            <Card
                title={"Contact Us"}
                text={"Contact us here for all general queries"}
                link={"*"}
            />
            <Card
                title={"Manage devices"}
                text={"Add or edit devices associated with your SSH account"}
                link={"*"}
            />
            {/*<Card*/}
            {/*    title={"Ssh Shop"}*/}
            {/*    text={"Lorem Ipsum"}*/}
            {/*    link={"*"}*/}
            {/*/>*/}
    </div>
</div>
);

//Main page for us, will be adding items search bar etc
const ShopHome = () => (
    <div>
      <h2>Shop Home</h2>
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
);

//variable page that changes based on searches
const SearchResults = () => (
    <div>
        <FilterSelect/>
    </div>
);

//just displays items added to basket, and price(?)
const Basket = () => (
    <div>

    </div>
);

//pretend to get user information and display price
const Checkout = () => (
    <div>

    </div>
);
export default App;
