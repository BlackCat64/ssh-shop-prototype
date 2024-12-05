import React from 'react';
import Item from "./Item"
interface ItemCardProps{
    title?: string;
    text?: string;
    item?: React.ReactElement<typeof Item>;
}
//The ItemCard.tsx component uses 3 props, title, text and link. The title is the
//title of the card, the text is the main body and link is the postfix url used for
//navigation to the resulting page
function ItemCard({ title, text, item }: ItemCardProps) {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <div style={{ width: "100%", display: "block" }}>{item}</div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
            </div>
        </div>
    );
}
export default ItemCard;