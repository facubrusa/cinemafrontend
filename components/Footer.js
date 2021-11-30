import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faPinterestP } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return ( 
        <>
        <footer className="bg3 p-t-45 p-b-32">
            <div className="container">
                <div className="row justify-content-between">
        
                    <div className="col-sm-6 col-lg-2 p-b-50">
                        <h4 className="stext-301 cl0 p-b-30">
                            GET IN TOUCH
                        </h4>
        
                        <p className="stext-107 cl7 size-201">
                            Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us
                            on (+54) 3564 123123
                        </p>
        
                        <div className="p-t-27">
                            <a href="#" className="fs-18 cl7 hov-cl1 trans-04 m-r-20">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
        
                            <a href="#" className="fs-18 cl7 hov-cl1 trans-04 m-r-20">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
        
                            <a href="#" className="fs-18 cl7 hov-cl1 trans-04 m-r-20">
                                <FontAwesomeIcon icon={faPinterestP} />
                            </a>
                        </div>
                    </div>
        
                    <div className="col-sm-6 col-lg-2 p-b-50">
                        <h4 className="stext-301 cl0 p-b-30">
                            Newsletter
                        </h4>
        
                        <form>
                            <div className="wrap-input1 w-full p-b-4">
                                <input className="input1 bg-none plh1 stext-107 cl7" type="text" name="email"
                                    placeholder="email@example.com" />
                                <div className="focus-input1 trans-04"></div>
                            </div>
        
                            <div className="p-t-18">
                                <button className="flex-c-m stext-101 cl0 size-103 bg1 bor1 hov-btn2 p-lr-15 trans-04">
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
        
                <div>
                    <p className="stext-107 cl6 txt-center">
                        Copyright &copy;{year} All rights reserved | Made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a
                            href="https://colorlib.com" target="_blank">Colorlib</a> &amp; distributed by <a
                            href="https://themewagon.com" target="_blank">ThemeWagon</a>
                    </p>
                    <p className="stext-107 cl6 txt-center">Facundito just copy and customize c:</p>
                </div>
            </div>
        </footer>

        <script src="/plugins/jquery/jquery-3.2.1.min.js"></script>
        <script src="/js/main.js"></script>
        </>
    );
}
 
export default Footer;