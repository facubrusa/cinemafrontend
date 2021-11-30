import React from 'react';
import MovieState from '../context/movies/movieState';
import '../public/plugins/css-hamburgers/hamburgers.min.css';
import '../public/plugins/bootstrap-4.6.0-dist/css/bootstrap.min.css';
import '../public/css/util.css';
import '../public/css/main.css';
import '../public/css/custom.css';
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

const myApp = ({ Component, pageProps }) => {
    return (
      <MovieState>
        <Component {...pageProps} />
      </MovieState>
    )
}

export default myApp;
