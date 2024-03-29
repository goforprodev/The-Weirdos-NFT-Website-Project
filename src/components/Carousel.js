import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay, EffectCards } from "swiper";

import img1 from "../assets/Nfts/bighead.svg";
import img2 from "../assets/Nfts/bighead-1.svg";
import img3 from "../assets/Nfts/bighead-2.svg";
import img4 from "../assets/Nfts/bighead-3.svg";
import img5 from "../assets/Nfts/bighead-4.svg";
import img6 from "../assets/Nfts/bighead-5.svg";
import img7 from "../assets/Nfts/bighead-6.svg";
import img8 from "../assets/Nfts/bighead-7.svg";
import img9 from "../assets/Nfts/bighead-8.svg";
import img10 from "../assets/Nfts/bighead-9.svg";
import img11 from "../assets/Nfts/bighead-10.svg";

import Arrow from "../assets/Arrow.svg";

const Container = styled.div`
  width: 25vw;
  height: 70vh;
  color: ${(props) => props.theme.text};

  .swiper {
    width: 100%;
    height: 70vh;
    background: ${(props) => props.theme.carouselColor};
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: ${(props) => props.theme.text};
    right: 0;
    top: 60%;
    background: url(${Arrow}) center;
    background-size: cover;
    width: 4rem;

    &:after {
      display: none;
    }
  }

  .swiper-button-prev {
    left: 0;
    transform: rotate(180deg);
  }
`;

const Carousel = () => {
  return (
    <Container>
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          type: "fraction",
        }}
        scrollbar={{
          draggable: true,
        }}
        navigation={true}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Pagination, Navigation, Autoplay]}
        class="mySwiper"
      >
        <SwiperSlide className="swiper">
          <img src={img1} alt={"Nft"} />
        </SwiperSlide>
        <SwiperSlide className="swiper">
          <img src={img2} alt={"Nft"} />
        </SwiperSlide>
        <SwiperSlide className="swiper">
          <img src={img3} alt={"Nft"} />
        </SwiperSlide>
        <SwiperSlide className="swiper">
          <img src={img4} alt={"Nft"} />
        </SwiperSlide>
        <SwiperSlide className="swiper">
          <img src={img5} alt={"Nft"} />
        </SwiperSlide>
        <SwiperSlide className="swiper">
          <img src={img6} alt={"Nft"} />
        </SwiperSlide>
        <SwiperSlide className="swiper">
          <img src={img7} alt={"Nft"} />
        </SwiperSlide>
        <SwiperSlide className="swiper">
          <img src={img8} alt={"Nft"} />
        </SwiperSlide>
        <SwiperSlide className="swiper">
          <img src={img9} alt={"Nft"} />
        </SwiperSlide>
        <SwiperSlide className="swiper">
          <img src={img10} alt={"Nft"} />
        </SwiperSlide>
        <SwiperSlide className="swiper">
          <img src={img11} alt={"Nft"} />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Carousel;
