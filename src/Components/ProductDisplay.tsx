import React from 'react';

interface ProductProps{
    name: string; // name of the product
    desc: string; // a short description to display about the product
    price: string; // a string representation of the product's price
    img: string; // source URL for an image of the product
    id: string; // the product's ID, which is used in its page's link as a query parameter
}
function ProductDisplay({name, desc, price, img, id}:ProductProps) {
    return (
        <div className="card productDisplay">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={img} alt={name} className="img-fluid rounded-start" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h4 className="card-title">{name}</h4>
                        <p className="card-text">{desc}</p>
                        <h5><strong>{price}</strong></h5>
                        <a href={`/shop/product?id=${id}`} className="btn btn-primary">
                            Details
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProductDisplay;