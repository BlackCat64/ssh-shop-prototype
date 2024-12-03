import React from 'react';
import './Card.css';

interface ItemCardProps{
    title: string;
    text: string;
    link: string;
}
//The Card.tsx component uses 3 props, title, text and link. The title is the
//title of the card, the text is the main body and link is the postfix url used for
//navigation to the resulting page
function Card({title,text,link}:ItemCardProps) {
    return (
        <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                    <a href={link} className="btn btn-primary">{title}</a>
                </div>
        </div>
    );
}
export default Card;