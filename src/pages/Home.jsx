import React from 'react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import backgroundImage from '../assets/productbg.jpg';
import picture from '../assets/Picture 1.jpg';
import { useProducts } from '../context/ProductsContext';

import '../components/Hero.css';

export default function Home() {
    const { products, loading } = useProducts();
    const featuredProducts = products.slice(0, 3);

    return (
        <div
            style={{
                minHeight: 'auto',
                width: '100%',
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Hero />

            <section
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '20px',
                    justifyContent: 'center',
                    marginTop: '2rem',
                }}
            >
                {[
                    {
                        title: 'High Quality',
                        text: 'Carefully curated styles that blend premium quality with standout design.',
                    },
                    {
                        title: "Editor's Picks",
                        text: 'Style-approved favorites curated for trendsetters who value quality and design.',
                    },
                    {
                        title: 'Effortless Chic',
                        text: 'Timeless pieces with modern flair—look polished without even trying.',
                    },
                ].map((item, index) => (
                    <div
                        key={index}
                        style={{
                            flex: '1 1 250px',
                            maxWidth: '300px',
                            textAlign: 'center',
                            padding: '1rem',
                        }}
                    >
                        <h2 style={{ color: '#333333', fontSize: 'clamp(1.2rem, 2vw, 1.5rem)' }}>
                            {item.title}
                        </h2>
                        <p style={{ color: '#333333', fontSize: 'clamp(0.9rem, 1.5vw, 1rem)' }}>
                            {item.text}
                        </p>
                    </div>
                ))}
            </section>

            <section style={{ width: '100%' }}>
                <h2 style={{ textAlign: 'center', color: '#333333', margin: '4rem 0 1rem' }}>
                    Featured Products
                </h2>
                <p style={{ textAlign: 'center', color: 'rgba(20, 20, 19, 0.5)' }}>
                    Discover our most prestigious collection of clothing, designed with exceptional attention to detail.
                </p>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '20px',
                        justifyContent: 'center',
                        padding: '25px',
                    }}
                >
                    {loading ? (
                        <p style={{ gridColumn: '1/-1', textAlign: 'center', color: '#333' }}>Loading...</p>
                    ) : (
                        featuredProducts.map((product) => (
                            <div
                                key={product.id}
                                style={{
                                    boxSizing: 'border-box',
                                }}
                            >
                                <ProductCard product={product} />
                            </div>
                        ))
                    )}
                </div>
            </section>

            <section style={{ marginTop: '4rem', width: '100%', padding: '1rem' }}>
                <div
                    style={{
                        position: 'relative',
                        height: '400px',
                        margin: '0 auto',
                        borderRadius: '0px',
                        overflow: 'hidden',
                        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                    }}
                >
                    <img
                        src={picture}
                        alt="Fashion Collection"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block',
                        }}
                    />
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            height: '100%',
                            width: '100%',
                            backgroundColor: 'rgba(0, 0, 0, 0.3)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            textAlign: 'center',
                            color: 'white',
                        }}
                    >
                        <h2 style={{ marginBottom: '0.2rem', fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}>
                            Discover Your Style. Define Your Story.
                        </h2>
                        <p style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.2rem)', maxWidth: '90%' }}>
                            At the heart of great fashion lies individuality — and your wardrobe should reflect who you are. Whether you're curating a look for work, weekends, or nights out, every piece you wear is a chapter in your personal style story.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}