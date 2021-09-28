import React from 'react';
import Cards from './Cards';
import "./index.css";
import Sdata from "./Sdata";
import Footer from './Footer';



const App = () => (
    <>
        <h1 className="header"> 🚗  Top 3 Super Cars  🚗</h1>

        {Sdata.map((val, index) => {
            return (
                <Cards
                    key={val.id}
                    imgsrc={val.imgsrc}
                    cardname={val.cardname}
                    details={val.details}
                />
            );
        })}
        <Footer />
    </>
);

export default App;