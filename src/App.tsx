import React, {useState} from 'react';
import './App.css';
import './SearchResults.css';

import NavBar from './Components/NavBar';
import  CarouselAP from './Components/CarouselAP';
import CardsHolder from './Components/CardsHolder';
import Item from './Components/Item';
import { BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation} from "react-router-dom";

import ItemCard from "./Components/ItemCard";
import FilterSelect from './Components/FilterSelect';
import ProductDisplay from './Components/ProductDisplay';


 var test = <Item imgSrc="/Images/CameraFillerPhoto.jpg" link="/shop/checkout" text="Test Item"/>

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
            <Route path="/shop/product" element={<ViewProduct />}/>
            <Route path="/shop/basket" element={<Basket />}/>
            <Route path="/shop/checkout" element={<Checkout />}/>
            <Route path="/shop/settings" element={<Settings />}/>
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
            item={<Item link="/shop"/>}
        />
    </div>
);

//Main page for us, will be adding items search bar etc
const ShopHome = () => (
    <div>
    <NavBar barName={"SSH Shop"} barNameLink="/shop"/>
    <CarouselAP imageOne="/Images/CameraFillerPhoto.jpg" imageTwo="/Images/Table.jpg" imageThree="Cloud.jpg"/>
        <div
            style={{
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                background: "linear-gradient(aliceblue, lightgrey)",

            }}
        >
            <div
                style={{
                    padding: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                }}
            >
                <div style={{ flex: "1 0 20%", padding: "10px" }}>
                    <CardsHolder cardOne={test} cardTwo={test} cardThree={test} cardFour={test} />
                </div>
                <div style={{ flex: "1 0 20%", padding: "10px" }}>
                    <CardsHolder cardOne={test} cardTwo={test} cardThree={test} cardFour={test} />
                </div>
                <div style={{ flex: "1 0 20%", padding: "10px" }}>
                    <CardsHolder cardOne={test} cardTwo={test} cardThree={test} cardFour={test} />
                </div>
                <div style={{ flex: "1 0 20%", padding: "10px" }}>
                    <CardsHolder cardOne={test} cardTwo={test} cardThree={test} cardFour={test} />
                </div>
            </div>

            <div
                style={{
                    padding: "20px",
                    paddingBottom: "30px",
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                }}
            >
                <div style={{ flex: "1 0 20%", padding: "10px" }}>
                    <CardsHolder cardOne={test} cardTwo={test} cardThree={test} cardFour={test} />
                </div>
                <div style={{ flex: "1 0 20%", padding: "10px" }}>
                    <CardsHolder cardOne={test} cardTwo={test} cardThree={test} cardFour={test} />
                </div>
                <div style={{ flex: "1 0 20%", padding: "10px" }}>
                    <CardsHolder cardOne={test} cardTwo={test} cardThree={test} cardFour={test} />
                </div>
                <div style={{ flex: "1 0 20%", padding: "10px" }}>
                    <CardsHolder cardOne={test} cardTwo={test} cardThree={test} cardFour={test} />
                </div>
            </div>
        </div>
        <div
            style={{
                padding: "20px",
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                backgroundColor: "lightgrey"
            }}
        >
            <div style={{ flex: "1 0 20%", padding: "5px" }}>
                <ItemCard item={test} text="£299" />
            </div>
            <div style={{ flex: "1 0 20%", padding: "5px" }}>
                <ItemCard item={test} text="£299" />
            </div>
            <div style={{ flex: "1 0 20%", padding: "5px" }}>
                <ItemCard item={test} text="£299" />
            </div>
            <div style={{ flex: "1 0 20%", padding: "5px" }}>
                <ItemCard item={test} text="£299" />
            </div>
        </div>
        <div
            style={{
                padding: "20px",
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                background: "linear-gradient(lightgrey, aliceblue)"
            }}
        >
            <div style={{ flex: "1 0 20%", padding: "5px" }}>
                <ItemCard item={test} text="£299" />
            </div>
            <div style={{ flex: "1 0 20%", padding: "5px" }}>
                <ItemCard item={test} text="£299" />
            </div>
            <div style={{ flex: "1 0 20%", padding: "5px" }}>
                <ItemCard item={test} text="£299" />
            </div>
            <div style={{ flex: "1 0 20%", padding: "5px" }}>
                <ItemCard item={test} text="£299" />
            </div>
        </div>
        <div style={{width:"100%", backgroundColor:"#d1e3f0", display:"flex", height:"100px"}}>
        </div>
        <div style={{width:"100%", backgroundColor:"#c1d8e8", display:"flex", height:"500px"}}>
        </div>
        <div style={{width:"100%", backgroundColor:"#9dbcd1", display:"flex", height:"250px"}}>
        </div>
    </div>
);

//variable page that changes based on searches
const SearchResults = () => {
    const [sortType, setSortType] = useState<string>("alphabetical"); // default to sort by alphabetical order
    const [minPrice, setMinPrice] = useState<number>(0);
    const [maxPrice, setMaxPrice] = useState<number>(500);

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('query') || '';

    const rawResults = productsDB.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase())
    );
    // filter by price
    const priceFilterResults = rawResults.filter(item =>
        item.price >= minPrice && item.price <= maxPrice
    );
    // Sort the results based on sortType
    const results = priceFilterResults.sort((a, b) => {
        switch (sortType) {
            case "alphabetical":
                return a.name.localeCompare(b.name);
            case "alphabetical-reverse":
                return b.name.localeCompare(a.name);
            case "price":
                return a.price - b.price;
            case "price-reverse":
                return b.price - a.price;
            default:
                return 0;
        }
    });

    return (<div className={"searchResults"}>
        <NavBar barName={"SSH Shop"} barNameLink="/shop"/>
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
            <div className="productList">
                {results.map(product => ( // display search results
                    <ProductDisplay
                        name={product.name}
                        summary={product.summary}
                        price={displayPrice(product.price, "£")}
                        img={product.images[0]}
                        id={product.id}
                    />
                ))}
            </div>
        </div>
    </div>);
};

const ViewProduct = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id: number = parseInt(queryParams.get('id') || '', 10);

    if (isNaN(id))
        return (
            <div className="productView">
                <NavBar barName={"SSH Shop"} barNameLink="/shop"/>
                <p><strong>Invalid Product ID</strong></p>
            </div>
        );

    const product = productsDB.find(p => p.id == id);
    if (!product)
        return (
            <div className="productView">
                <NavBar barName={"SSH Shop"} barNameLink="/shop"/>
                <p>Product Not Found</p>
            </div>
        );


    return (
    <div className="productView">
        <NavBar barName={"SSH Shop"} barNameLink="/shop"/>
        <ImageCarousel images={product.images}/>
        <div className="productDetails">
            <div className="productHeader">
                <p className="productName">{product.name}</p>
                <button className="btn btn-primary addToBasket">Add to Basket</button>
            </div>

            <p className="productPrice">{displayPrice(product.price, "£")}</p>
            <p style={{fontWeight: 'bold'}}>Item Details:</p>
            <p className="productDesc">{product.desc.split('\n').map(line => line.trim()).join('\n')}</p>
        </div>
    </div>
    );
};

//just displays items added to basket, and price(?)
const Basket = () => (
    <div>
        <NavBar barName={"SSH Shop"} barNameLink="/shop"/>
    </div>
);

//pretend to get user information and display price
const Checkout = () => (
    <div>
        <NavBar barName={"SSH Shop"} barNameLink="/shop"/>
    </div>
);

// SSH Shop account page - This contains order history, help+contact options, and a link to the main SSH Account page
const Settings = () => (
    <div>
        <NavBar barName={"SSH Shop"} barNameLink="/shop"/>
    </div>
);


function displayPrice(price: number, currency: string): string {
    return currency + price.toFixed(2);
}

export default App;
