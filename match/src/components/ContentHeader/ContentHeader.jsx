import React from 'react';
import Slider from 'react-slick';
import styles from './ContentHeader.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ContentHeader = () => {
  const images = [
    {
      src: 'https://d31wz4d3hgve8q.cloudfront.net/media/ydp_thef_half.jpeg?w=1920',
      alt: '서울 영등포 EA SPORTS FC(더에프필드) B구장',
    },
    {
      src: 'https://d31wz4d3hgve8q.cloudfront.net/media/ydp_thef_coner.jpeg?w=1920',
      alt: '서울 영등포 EA SPORTS FC(더에프필드) B구장',
    },
    {
      src: 'https://d31wz4d3hgve8q.cloudfront.net/media/ydp_thef_goal.jpeg?w=1920',
      alt: '서울 영등포 EA SPORTS FC(더에프필드) B구장',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.contentHeader}>
      {/* Image Slider */}
      <div className={styles.sliderContainer}> 
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className={styles.slide}>
              <img src={image.src} alt={image.alt} className={styles.slideImage} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ContentHeader;