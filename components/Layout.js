import React from 'react';
import Head from 'next/head';
import Header from './Header';

const Layout = ({children}) => {
    return ( 
        <>
            <Head>
                <title>Cinema Frontend</title>
                <link rel="icon" type="image/png" href="images/icons/favicon.png" />
                <link rel="stylesheet" href="plugins/bootstrap-4.6.0-dist/css/bootstrap.min.css" />
                <link rel="stylesheet" href="css/custom.css" />
            </Head>

            <Header />
            <main className="m-t-10">
                {children}
            </main>
            <script src="plugins/jquery/jquery-3.2.1.min.js"></script>
            <script src="js/main.js"></script>
        </>
    );
}
 
export default Layout;