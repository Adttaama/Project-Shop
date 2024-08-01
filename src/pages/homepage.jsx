import { Container, Col, Row } from "react-bootstrap";
import HeroImage from "../assets/img/computer.png";

import { kelasTerbaru, dataSwiper } from "../data/index";
import { useNavigate } from "react-router-dom";

import FaqCom from "../component/faqCom";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const homepage = () => {
  let navigate = useNavigate();
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col lg="6">
              <h1 className="mb-4 ">
                temukan <br /> <span>bakat kreatifmu</span> <br />
                bersama kami
              </h1>
              <p className="mb-4">
                Dapatkan semua <span className="fw-bold">kelas</span> dengan harga terjangakau dengan diskon hingga <span className="fw-bold ">70%</span>
              </p>
              <button className="btn btn-info btn-lg fw-bold rounded-1 me-2 mb-xs-0 mb-2" onClick={() => navigate("/kelas")}>
                lihat kelas
              </button>
              <button className="btn btn-outline-primary btn-lg rounded-1 mb-xs-0 mb-2">lihat promo</button>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
              <img src={HeroImage} alt="img" />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="kelas w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold">Kelas terbaru</h1>
              <p className="text-center">Jadilah Ahli di Bidang Anda dengan Harga Terbaik!</p>
            </Col>
          </Row>
          <Row>
            {kelasTerbaru.map((kelas) => {
              return (
                <Col key={kelas.id} className="shadow rounded">
                  <img src={kelas.image} alt="unsplash.com" className="w-100 mb-5 rounded-top" />
                  <div className="star mb-2 px-3">
                    <i className={kelas.star1}></i>
                    <i className={kelas.star2}></i>
                    <i className={kelas.star3}></i>
                    <i className={kelas.star4}></i>
                    <i className={kelas.star5}></i>
                  </div>
                  <h5 className="mb-5 px-3">{kelas.title}</h5>
                  <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                    <p className="m-0 text-primary fw-bold">{kelas.price}</p>
                    <button className="btn btn-primary rounded-1">{kelas.buy}</button>
                  </div>
                </Col>
              );
            })}
          </Row>
          <Row>
            <Col className="text-center">
              <button className="btn btn-primary rounded-5 btn-lg" onClick={() => navigate("/kelas")}>
                lihat semua kelas <i className="fa-solid fa-chevron-right ms-1"></i>
              </button>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="testimonial py-5">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold my-5">Testimonial</h1>
            </Col>
          </Row>
          <Row>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                992: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {dataSwiper.map((data) => {
                return (
                  <SwiperSlide key={data.id} className="shadow-sm">
                    <div className="people">
                      <img src={data.image} alt="" />
                      <h5 className="mb-1">{data.name}</h5>
                      <p className="m-0 fw-bold">{data.skill}</p>
                    </div>

                    <p className="desc">{data.desc}</p>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Row>
        </Container>
      </div>

      {/* faq component */}
      <FaqCom />
      {/* faq component */}
    </div>
  );
};

export default homepage;
