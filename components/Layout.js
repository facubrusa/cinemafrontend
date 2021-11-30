import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = ({children}) => {
    return ( 
        <>
            <Head>
                <title>Cinema Frontend</title>
                <link rel="icon" type="image/png" href="images/icons/favicon.png" />
            </Head>

            <Header />
            <main className="m-t-10">
                {children}
            </main>

            <Footer />
        </>
    );
}
 
export default Layout;