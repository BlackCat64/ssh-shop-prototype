import React, {useState} from 'react';
import './App.css';
import './Components/TextBox'
import { BrowserRouter as Router,
  Route,
  Routes,
  Link} from "react-router-dom";
import ItemCard from "./Components/ItemCard";
import FilterSelect from './Components/FilterSelect';
import ProductDisplay from './Components/ProductDisplay';
import TextBox from "./Components/TextBox";
import TextHeader from "./Components/TextHeader";

var itemTotal : number;
function setItemTotal() {
    itemTotal = 400;
}
function getItemsTotal(){
    return itemTotal;
}
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
const Checkout = () => {
    const [sameBillingAddress, setSameBillingAddress] = useState(false);
    function handleSameAddClick() {
        setSameBillingAddress(!sameBillingAddress); // Toggle the state
    }
    const [checkoutStage, setCheckoutStage] = useState(1)
    function handleNextStage(){
        setCheckoutStage(checkoutStage + 1);
        setItemTotal() //delete this part later, just here for testing reasons
    }
    return (
        <div>
            <h2 style={{paddingLeft: "60px"}}>Checkout</h2>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "20px" }}>
                {/* Left Side: Form */}
                <form style={{ marginLeft: "40px", flex: "1", maxWidth: "65%" }}>
                    <TextHeader text="Billing Address" />
                    {checkoutStage === 1 ?

                    <> {/*fragment here so that I can make section conditional */}
                    <TextBox text="First Name:" />
                    <TextBox text="Last Name:" />
                    <TextBox text="Street Address:" />
                    <TextBox />
                    <TextBox text="Town/City:" />
                    <TextBox text="Postal Code:" />
                    <TextBox text="Email:" />
                    <br />

                    {/*Button which can enable and disable shipping address html */}

                    <div style={{outline: "2px solid lightblue", border: "2px solid lightblue", width: "200px", height: "27px", borderRadius: "4px", background: "aliceblue",}}>
                        <input type="checkbox" onClick={() => handleSameAddClick()} />
                        <label> Same As Billing Address </label>
                    </div>

                    <br />

                    {!sameBillingAddress ? (
                        <form>
                            <TextHeader text="Shipping Address" />
                            <TextBox text="First Name:" />
                            <TextBox text="Last Name:" />
                            <TextBox text="Street Address:" />
                            <TextBox />
                            <TextBox text="Town/City:" />
                            <TextBox text="Postal Code:" />
                            <TextBox text="Email:" />
                            <br/>
                        </form>

                    ) : null}

                        <button style={{background: "grey"}} onClick={() => handleNextStage()}> <h5 style={{fontWeight: "bold"}}>continue</h5> </button>
                        <br/>
                     </>

                    : null}
                    <br/>
                    <TextHeader text="Payment Method"/>
                    {checkoutStage === 2 ?
                        <>
                        <div style={{ display: "flex", alignItems: "flex-start", gap: "20px", maxWidth: "40%" }}>
                            {/* Left Column: Card Number and Date Picker */}
                            <div style={{ flex: "2", display: "flex", flexDirection: "column", gap: "10px" }}>
                                <TextBox text="Card Number:" textBoxWidth="200px" />
                                <input type="date" style={{width: "50%", padding: "5px", boxSizing: "border-box",}}/>
                            </div>
                            {/* Right Column: CVV2 Number */}
                            <div style={{ flex: "1", display: "flex", alignItems: "center" }}>
                                <TextBox text="CVV2 Number:" textBoxWidth="1000px" />
                            </div>
                        </div>
                            <p style={{fontWeight : "bold", fontSize: "15px"}}>Total amount: £{getItemsTotal()}</p>
                            <p style={{fontWeight : "bold", fontStyle: "italic", fontSize: "10px"}}>Estimated Delivery Time 3-5 Working Days</p>
                            <button style={{background: "grey"}} onClick={() => handleNextStage()}> <h5 style={{fontWeight: "bold"}}>continue</h5> </button>
                        </>
                     : null}
                </form>


                {/* Right Side: Additional Content */}
                <div style={{ flex: "1", maxWidth: "35%", padding: "20px" }}>
                    <h2>Right Side Content</h2>
                    <p>This is where you can add content on the right side of the page.</p>
                </div>
            </div>
        </div>
    );
}
export default App;
