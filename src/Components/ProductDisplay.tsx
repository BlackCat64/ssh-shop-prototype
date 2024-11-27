import React from 'react';

interface ProductProps{
    name: string; // name of the product
    desc: string; // a short description to display about the product
    img: string; // source URL for an image of the product
    id: string; // the product's ID, which is used in its page's link as a query parameter
}
function ProductDisplay({name, desc, img, id}:ProductProps) {
    return (
        <div className="card productDisplay">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={img} alt={name} className="img-fluid rounded-start" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{desc}</p>
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