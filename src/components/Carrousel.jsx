import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

import "../styles/carrousel.css";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // Chemins des images dans le dossier public
  const images = [
    '/images/carrousel/photo1.png',
    '/images/carrousel/photo2.png',
    '/images/carrousel/photo3.png',
  ];

  return (
    <div style={{ width: '100%', margin: '0 auto' }}>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;