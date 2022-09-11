import React from "react";
import { AboutUs, Professor, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from '../container';
import { Navbar } from '../components';

const Top = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <AboutUs />
            <Professor />
            <Intro />
            <Gallery />
            {/*<SpecialMenu />
            <Laurels />*/}
            <FindUs />
            <Footer />
        </div>
    )
}

export default Top;