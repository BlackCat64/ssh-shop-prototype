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

const productsDB = [
    {
        id: 201,
        name: "Ergonomic Keyboard",
        price: 49.99,
        summary: "A comfortable ergonomic keyboard for long hours of typing.",
        desc: `This ergonomic keyboard is designed to reduce strain on your wrists.
        It features:
        - Split key design
        - Soft-touch keys
        - Durable build with adjustable tilt
        `,
        images: [
            {
                src: "/Images/Cloud.jpg",
                alt: "Ergonomic Keyboard Image #1"
            }
        ]
    },
    {
        id: 202,
        name: "Wireless Mouse",
        price: 24.99,
        summary: "A sleek wireless mouse with customizable buttons.",
        desc: `This wireless mouse offers precision and control.
        Features include:
        - Adjustable DPI
        - Long battery life (up to 6 months)
        - Ergonomic grip for comfort during extended use
        `,
        images: [
            {
                src: "/Images/Cloud.jpg",
                alt: "Wireless Mouse Image #1"
            },
            {
                src: "/Images/Cloud.jpg",
                alt: "Wireless Mouse Image #2"
            }
        ]
    },
    {
        id: 203,
        name: "RGB Gaming Headset",
        price: 79.99,
        summary: "A vibrant gaming headset with surround sound.",
        desc: `Take your gaming to the next level with immersive sound.
        Specifications:
        - Virtual 7.1 surround sound
        - Noise-canceling microphone
        - Comfortable ear cups with RGB lighting
        `,
        images: [
            {
                src: "/Images/Cloud.jpg",
                alt: "RGB Gaming Headset Image #1"
            },
            {
                src: "/Images/Cloud.jpg",
                alt: "RGB Gaming Headset Image #2"
            },
            {
                src: "/Images/Cloud.jpg",
                alt: "RGB Gaming Headset Image #3"
            }
        ]
    },
    {
        id: 204,
        name: "4K Webcam",
        price: 89.99,
        summary: "A high-quality webcam for crystal-clear video calls.",
        desc: `Enhance your online presence with this 4K webcam.
        Features include:
        - Auto-focus technology
        - Built-in noise-reducing microphone
        - Adjustable field of view
        `,
        images: [
            {
                src: "/Images/Cloud.jpg",
                alt: "4K Webcam Image #1"
            }
        ]
    },
    {
        id: 205,
        name: "Mechanical Keyboard",
        price: 149.99,
        summary: "A durable mechanical keyboard with RGB lighting.",
        desc: `This mechanical keyboard is built for speed and precision.
        Key features:
        - Tactile key switches
        - Fully customizable RGB lighting
        - Detachable wrist rest for ergonomic typing
        `,
        images: [
            {
                src: "/Images/Cloud.jpg",
                alt: "Mechanical Keyboard Image #1"
            },
            {
                src: "/Images/Cloud.jpg",
                alt: "Mechanical Keyboard Image #2"
            }
        ]
    },
    {
        id: 206,
        name: "USB-C Hub",
        price: 39.99,
        summary: "A multi-port USB-C hub for all your connectivity needs.",
        desc: `Connect multiple devices with this versatile USB-C hub.
        Ports include:
        - 3x USB-A
        - 1x HDMI (4K)
        - 1x SD card slot and microSD card slot
        `,
        images: [
            {
                src: "/Images/Cloud.jpg",
                alt: "USB-C Hub Image #1"
            }
        ]
    },
    {
        id: 207,
        name: "Portable SSD",
        price: 99.99,
        summary: "A fast and durable portable SSD with 1TB capacity.",
        desc: `Store your data securely with this portable SSD.
        Specifications:
        - 1TB storage capacity
        - Shock-resistant design
        - USB 3.2 Gen 2 interface
        `,
        images: [
            {
                src: "/Images/Cloud.jpg",
                alt: "Portable SSD Image #1"
            },
            {
                src: "/Images/Cloud.jpg",
                alt: "Portable SSD Image #2"
            }
        ]
    },
    {
        id: 208,
        name: "Dual Monitor Stand",
        price: 129.99,
        summary: "A sturdy dual monitor stand with adjustable arms.",
        desc: `Maximize your workspace with this dual monitor stand.
        Features:
        - Fully adjustable arms
        - Supports up to 32-inch monitors
        - Integrated cable management
        `,
        images: [
            {
                src: "/Images/Cloud.jpg",
                alt: "Dual Monitor Stand Image #1"
            }
        ]
    },
    {
        id: 209,
        name: "Gaming Chair",
        price: 249.99,
        summary: "An ergonomic gaming chair with lumbar support.",
        desc: `Stay comfortable during long gaming sessions.
        Features:
        - Adjustable lumbar and neck support
        - Reclining function up to 180°
        - High-density foam padding
        `,
        images: [
            {
                src: "/Images/Cloud.jpg",
                alt: "Gaming Chair Image #1"
            },
            {
                src: "/Images/Cloud.jpg",
                alt: "Gaming Chair Image #2"
            },
            {
                src: "/Images/Cloud.jpg",
                alt: "Gaming Chair Image #3"
            }
        ]
    },
    {
        id: 210,
        name: "Bluetooth Speaker",
        price: 59.99,
        summary: "A compact Bluetooth speaker with powerful sound.",
        desc: `Bring your music anywhere with this Bluetooth speaker.
        Key features:
        - Up to 12 hours of battery life
        - Water-resistant (IPX5)
        - Compact and lightweight design
        `,
        images: [
            {
                src: "/Images/Cloud.jpg",
                alt: "Bluetooth Speaker Image #1"
            }
        ]
    }
];

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

    return (<div className="searchResults">
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
