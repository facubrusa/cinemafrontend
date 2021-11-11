import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

export const MoviesSlider = {
  infinite: false,
  speed: 300,
  autoplay: false,
  autoplaySpeed: 6000,
  arrows: true,
  slidesToShow: 5,
  slidesToScroll: 5,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
  ]
};

export const ModalMovieSlider = {
  dots: false,
  infinite: false,
  speed: 300,
  arrows: true,
  slidesToShow: 8,
  slidesToScroll: 8,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
  ]
}

function SampleNextArrow(props) {
  const { onClick } = props;
  let classes = "arrow-slick4 next-slick4 slick-arrow";
  return (
      <button
          className={classes}
          onClick={onClick}
      ><FontAwesomeIcon icon={faAngleRight} size="xs" /></button>
  );
}
  
function SamplePrevArrow(props) {
  const { onClick } = props;
  let classes = "arrow-slick4 prev-slick4 slick-arrow";
  return (
      <button
          className={classes}
          onClick={onClick}
      ><FontAwesomeIcon icon={faAngleLeft} size="xs" /></button>
  );
}