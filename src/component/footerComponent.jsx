import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <div className="footer">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg="5">
            <h3 className="fw-bold">Adttaama Store</h3>
            <p className="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, veritatis!</p>
            <div className="nomer mb-1 mt-4">
              <Link className="text-decoration-none">
                <i className="fa-brands fa-whatsapp"></i>
                <p className="m-0">089977677</p>
              </Link>
            </div>
            <div className="mail">
              <Link className="text-decoration-none">
                <i className="fa-regular fa-envelope"></i>
                <p className="m-0">ap963195@gmail.com</p>
              </Link>
            </div>
          </Col>
          <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
            <h5 className="fw-bold">Menu</h5>
            <Link to="">Home</Link>
            <Link to="kelas">Kelas</Link>
            <Link to="testi">Testimonial</Link>
            <Link to="faq">FAQ</Link>
            <Link to="syarat">Syarat & Ketentuan</Link>
          </Col>
          <Col lg="4" className="mt-lg-0 mt-5">
            <h5 className="fw-bold mb-3">Subscribe untuk Materi Selanjutnya</h5>
            <div className="subscribe">
              <input type="text" placeholder="Subscribe..." />
              <button className="btn btn-danger rounded-end rounded-0">subscribe</button>
            </div>
            <div className="social mt-3">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-github"></i>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center p-md-0 px-3">
              &copy; CopyRight {new Date().getFullYear()} By <span className="fw-bold">Adttaama</span>, All Right Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponent;
