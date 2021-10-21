import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import DateModalSlider from './DateModalSlider';

const MovieModal = ({setShowModal, movie}) => {

    const [open, setOpen] = useState(true);

    const handleClose = () => {
        setOpen(false);
        setShowModal(false);
    }

    let { name, src, description } = movie;

    return ( 
        <Modal
            aria-labelledby="modal-movie" 
            aria-describedby="modal-movie-description"
            className="wrap-modal1 p-t-60 p-b-20 show-modal1"
            open={open}
        >
            <>
                    <div className="overlay-modal1"></div>

                    <div className="container">
                        <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
                            <button 
                                className="how-pos3 hov3 trans-04"
                                onClick={() => handleClose()}
                            >
                                <img src="images/icons/icon-close2.png" alt="CLOSE" />
                            </button>

                            <div className="row">
                                <div className="col-sm-12 col-md-6 col-lg-6 p-b-30 text-center">
                                    <div className="p-l-30 p-r-30 p-lr-0-lg">
                                        <div className="wrap-pic-w pos-relative">
                                            <img src={src} alt="IMG-PRODUCT" />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-12 col-md-6 col-lg-6 p-b-30 text-center">
                                    <div className="p-r-50 p-t-5 p-lr-0-lg">
                                        <h4 className="ltext-102 cl2 js-name-detail p-b-14">
                                            {name}
                                        </h4>

                                        <p className="stext-102 cl3 p-t-23">
                                            {description}
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                            Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat. Dolor sit amet consectetur adipiscing elit. 
                                            Tristique magna sit amet purus gravida quis blandit turpis.
                                        </p>

                                        <div className="p-t-35">
                                            <div className="p-t-5">
                                                <h6 className="mtext-112 cl2 p-b-16 text-center">
                                                    Select Date
                                                </h6>

                                                <DateModalSlider />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </>
        </Modal>
    );
}
 
export default MovieModal;