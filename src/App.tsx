import React, {useState} from 'react';
import './App.css';
import './ProductView.css';
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
import ImageCarousel from './Components/ImageCarousel';

var test = <Item imgSrc="/Images/CameraFillerPhoto.jpg" link="/shop/checkout" text="Test Item"/>

const productsDB = [ // a placeholder for reading from the products database, implemented using MongoDB
    {
        id: 100,
        name: "Amazing product 1",
        price: 49.99,
        summary: "This is a truly amazing product.",
        desc: `
        It comes with all the amazing things you would expect.
        Including:
        - feature
        - feature 2
        `,
        images: [
            {
                src: "/Images/Table.jpg",
                alt: "Image 1"
            },
            {
                src: "/Images/Cloud.jpg",
                alt: "Image 2"
            }
        ]
    },
    {
        id: 101,
        name: "A cool product",
        price: 14.50,
        summary: "This is a very cool product.",
        desc: `
        Enjoy your life more with this cool product.
        You won't believe the effect!
        
        Specs:
        - 100mm
        - W: 32cm x L: 24cm x H: 144cm
        - No batteries included
        `,
        images: [
            {
                src: "/Images/CameraFillerPhoto.jpg",
                alt: "Image 1"
            },
            {
                src: "/Images/Cloud.jpg",
                alt: "Image 2"
            },
            {
                src: "/Images/Table.jpg",
                alt: "Image 3"
            }
        ]
    }
]

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

    // use this code for searching in the list of items, when we have it
    // const results = mockData.filter(item =>
    //     item.toLowerCase().includes(searchQuery.toLowerCase())
    // );

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
            <ProductDisplay
                name="Test"
                summary="A very cool product"
                price="£14.99"
                img="https://media.discordapp.net/attachments/993444254447849523/1119610408504918026/853891953372168223.gif?ex=6747beb2&is=67466d32&hm=e9bdb151143b83d1d5822569cd28d89a4ee1286591c1d7fd38e65fc247b6f700&"
                id="69"
            />
            <ProductDisplay
                name="Test 2"
                summary="Another very cool product"
                price="£16.99"
                img="https://cdn.discordapp.com/attachments/1246915842340556921/1311012156682272918/image.png?ex=6747f777&is=6746a5f7&hm=55f3ba8f0dd4383bb6ad03ede1d0df06dac09783e65ed606a37aa165d1b819c2&"
                id="420"
            />
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
            <p className="productName">{product.name}</p>
            <p className="productDesc">{product.desc}</p>
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
export default App;
