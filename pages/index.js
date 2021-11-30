import React from 'react';
import Layout from '../components/Layout';
import DateSlider from '../components/DateSlider';
import PlayingMoviesSlider from '../components/movies/PlayingMoviesSlider';
import PremiereMoviesSlider from '../components/movies/PremiereMoviesSlider';

const Index = () => {
  return ( 
    <Layout>
      <section className="bg0 p-t-45 p-b-140">
        <div className="container">
          <div id="now-playing">
            <div className="p-b-25">
              <h3 className="ltext-110 cl5 txt-center respon1">
                Now Playing
              </h3>
            </div>

            <div className="p-t-25 m-r-70 m-l-70 m-lr-0-ssm">
              <DateSlider />
            </div>

            <div className="row">
              <div className="col-12 p-t-40">
                <PlayingMoviesSlider />
              </div>
            </div>
          </div>

          {/* <div id="coming-soon">
            <h3 className="ltext-110 cl5 txt-center respon1">
              Coming to IPIC
            </h3>
            <div className="row">
              <div className="col-12 p-t-20">
                <PremiereMoviesSlider />
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </Layout>
  );
}
 
export default Index;