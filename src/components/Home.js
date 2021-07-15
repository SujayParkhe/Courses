import React from 'react';
import Image from '../bg-image.jpg';

const Home = () => {
    return(
        <main>
            <img src={Image} alt="hero" className="absolute object-cover w-full h-full hero-image"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-3l text-white font-bold leading-none lg:leading-snug home-name">TRANSFORMATIVE
                    PATHWAYS FOR
                    LIBERAL EDUCATION
                </h1>
            </section>
        </main>
    )
}

export default Home;