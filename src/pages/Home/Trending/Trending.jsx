import React, { useState } from 'react';
// Importlarni tekshiring: AiOutline... bular 'ai' papkasidan keladi
import { AiOutlineHeart, AiFillHeart, AiOutlineShoppingCart } from 'react-icons/ai';

// Rasmlar (Yo'llar to'g'riligiga ishonch hosil qiling)
import krasofka from './images/krasofka.png';
import rsm from './images/rsm.png';
import rss from './images/rss.png';
import rr from './images/rr.png';
import ss from './images/sss.png';
import p from "./images/p.svg";
import pp from "./images/pp.png";
import p1 from './images/p1.svg';
import ps from "./images/ps.png";

import './Trending.css';

function Trending() {
    const [liked, setLiked] = useState({});

    const handleLike = (id) => {
        setLiked(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const trendingItems = [
        { id: 1, img: krasofka, title: "New from Jordan" },
        { id: 2, img: rsm, title: "New from Jordan" },
        { id: 3, img: rss, title: "New from Jordan" },
    ];

    const jacketItems = [
        { id: 4, img: rr, title: "Reversible Denim Jacket" },
        { id: 5, img: ss, title: "Cotton Jacquard Jacket" },
    ];

    const popularItems = [
        { id: 6, img: p, title: "Just In", text: "Nike Tech Fleece Windrunner", price: "$145" },
        { id: 7, img: pp, title: "Just In", price: "$145" },
        { id: 8, img: p1, title: "Just In", price: "$145" },
        { id: 9, img: ps, title: "Just In", price: "$145" },
    ];

    return (
        <main className='trending-wrapper'>
            {/* 1. Trending Section */}
            <section className='trending'>
                <div className='container'>
                    <h1 className='trending-title-name'>Trending</h1>
                    <ul className='trending-list'>
                        {trendingItems.map(item => (
                            <li key={item.id} className='trending-item'>
                                <div className="img-wrapper">
                                    <img src={item.img} alt={item.title} />
                                </div>
                                <h2 className='trending-title'>{item.title}</h2>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* 2. Jackets Section */}
            <section className='trd'>
                <div className='container'>
                    <ul className='trd-list'>
                        {jacketItems.map(item => (
                            <li key={item.id} className='trd-item'>
                                <div className='trd-img-container'>
                                    <img src={item.img} alt={item.title} />
                                    <button 
                                        className="like-btn"
                                        onClick={() => handleLike(item.id)}
                                    >
                                        {liked[item.id] ? 
                                            <AiFillHeart size={25} color="red" /> : 
                                            <AiOutlineHeart size={25} color="black" />
                                        }
                                    </button>
                                </div>
                                <div className="trd-info">
                                    <h2 className='trd-title'>{item.title}</h2>
                                    <button className="shop-btn">
                                        <a href="#">Shop Now</a>
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* 3. Popular Section */}
            <section className='pop'>
                <div className='container'>
                    <div className='pop-container'>
                        <h3 className='pop-title-name'>Popular right now</h3>
                        <ul className='pop-list'>
                            {popularItems.map(item => (
                                <li key={item.id} className='pop-item'>
                                    <div className='pop-img-box'>
                                        <img src={item.img} alt={item.text} />
                                        <div className='pop-actions'>
                                            <button 
                                                className="action-btn"
                                                onClick={() => handleLike(item.id)}
                                            >
                                                {liked[item.id] ? 
                                                    <AiFillHeart size={20} color="red" /> : 
                                                    <AiOutlineHeart size={20} />
                                                }
                                            </button>
                                            <button className='action-btn'>
                                                <AiOutlineShoppingCart size={20} />
                                            </button>
                                        </div>
                                    </div>
                                    <div className='pop-info'>
                                        <h3 className='pop-title'>{item.title}</h3>
                                        <p className='pop-text'>{item.text}</p>
                                        <p className='pop-text-sum'>{item.price}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Trending;