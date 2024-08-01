import { Container, Row, Col } from "react-bootstrap";
import { testimonial } from "../data/index";

import FaqCom from "../component/faqCom";

const testipage = () => {
  return (
    <div className="testi-page">
      <div className="testimonial">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center">Testimonial Page</h1>
            </Col>
          </Row>
          <Row className="row-cols-lg-3 row-cols-1 mt-5">
            {testimonial.map((data) => {
              return (
                <Col key={data.id} className="mb-5 ">
                  <div className="people ">
                    <img src={data.image} alt="" />
                    <h5 className="mb-1">{data.name}</h5>
                    <p className="m-0 fw-bold">{data.skill}</p>
                  </div>

                  <p className="desc shadow-sm">{data.desc}</p>
                </Col>
              );
            })}
          </Row>

          <FaqCom />
        </Container>
      </div>
    </div>
  );
};

export default testipage;
