import React, {useState} from 'react';
import './App.css';
import NavBar from './Components/NavBar'
import  CarouselAP from './Components/CarouselAP'
import { BrowserRouter as Router,
  Route,
  Routes,
  Link} from "react-router-dom";

import ItemCard from "./Components/ItemCard";
import FilterSelect from './Components/FilterSelect';
import ProductDisplay from './Components/ProductDisplay';

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
            <Route path="/shop/results" element={<SearchResults query={"null"}/>}/>
            <Route path="/shop/basket" element={<Basket />}/>
            <Route path="/shop/checkout" element={<Checkout />}/>
            <Route path="*" element={<h1>404 - Page Not Found</h1>} />
          </Routes>
        </div>

      </Router>
  );
}

//Dashboard function is like homepage, just use to have button to Shop
const Dashboard = () => (
    <div>
        <ItemCard
            title={"Ssh Shop"}
            text={"Lorem Ipsum"}
            link={"/shop"}
        />
    </div>
);

//Main page for us, will be adding items search bar etc
const ShopHome = () => (
    <div>
    <NavBar barName={"SSH Shop"} barNameLink="/shop"/>
    <CarouselAP imageOne="/Images/CameraFillerPhoto.jpg" imageTwo="/Images/Table.jpg" imageThree="Cloud.jpg"/>
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

interface SearchResultsProps {
    query: string;
}

//variable page that changes based on searches

const SearchResults = ({ query } : SearchResultsProps) => {
    const [sortType, setSortType] = useState<string>("alphabetical"); // default to sort by alphabetical order
    const [minPrice, setMinPrice] = useState<number>(0);
    const [maxPrice, setMaxPrice] = useState<number>(500);


    // use this code for searching in the list of items, when we have it
    // const results = mockData.filter(item =>
    //     item.toLowerCase().includes(searchQuery.toLowerCase())
    // );

    return (<div className={"searchResults"}>
        <FilterSelect
            sortType={sortType}
            setSortType={setSortType}
            minPrice={minPrice}
            setMinPrice={setMinPrice}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
        />
        <div className={"resultsDisplay"}>
            <p>Showing results for: <strong>{query}</strong></p>
            <p>Sorted by: <strong>{sortType}</strong></p>
            <p>Price Range: <strong>£{minPrice} - £{maxPrice}</strong></p>
            <ProductDisplay
                name={"Test"}
                desc={"A very cool product"}
                price={"£14.99"}
                img={"https://media.discordapp.net/attachments/993444254447849523/1119610408504918026/853891953372168223.gif?ex=6747beb2&is=67466d32&hm=e9bdb151143b83d1d5822569cd28d89a4ee1286591c1d7fd38e65fc247b6f700&"}
                id={"69"}
            />
            <ProductDisplay
                name={"Test 2"}
                desc={"Another very cool product"}
                price={"£16.99"}
                img={"https://cdn.discordapp.com/attachments/1246915842340556921/1311012156682272918/image.png?ex=6747f777&is=6746a5f7&hm=55f3ba8f0dd4383bb6ad03ede1d0df06dac09783e65ed606a37aa165d1b819c2&"}
                id={"420"}
            />
        </div>
    </div>);
};

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
