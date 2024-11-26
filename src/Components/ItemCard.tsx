import React from 'react';

interface ItemCardProps{
    title: string;
    text: string;
    link: string;
}
//The ItemCard.tsx component uses 3 props, title, text and link. The title is the
//title of the card, the text is the main body and link is the postfix url used for
//navigation to the resulting page
function ItemCard({title,text,link}:ItemCardProps) {
    return (
        <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                    <a href={link} className="btn btn-primary">{title}</a>
                </div>
        </div>
    );
}
export default ItemCard;