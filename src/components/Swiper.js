import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

function Slider() {
  return (
    <>
    <div className="slider-title">Attachments</div>
      <Swiper
        slidesPerView={3}
        spaceBetween={24}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://www.woli.io/wp-content/uploads/2022/03/3d-rendering-payment-via-credit-card-concept-secure-online-payment-transaction-with-phone-internet-banking-via-credit-card-mobile-geometric-object-floating-background.jpg" alt="img"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.woli.io/wp-content/uploads/2021/03/easy-contactless-payment-via-smartphone-concept-online-mobile-shopping-payment-transaction-3d-render-illustration.jpg" alt="img"></img>
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://www.woli.io/wp-content/uploads/2021/03/3d-social-media-platform-online-social-communication-applications-concept-emoji-webpage-search-icons-chat-chart-with-smartphone-3d-rendering.jpg" alt="img"></img>
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://www.woli.io/wp-content/uploads/2022/03/money-saving-concept-coins-stack-bundles-money-pink-background-3d-render-illustration.jpg" alt="img"></img>
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://www.woli.io/wp-content/uploads/2021/03/3d-social-media-platform-online-social-communication-applications-concept-emoji-webpage-search-icons-chat-chart-with-smartphone-background-3d-illustration.jpg" alt="img"></img>
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://i.pinimg.com/564x/a7/72/c2/a772c2584090a0c33d0d20dd8da512f3.jpg" alt="img"></img>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
