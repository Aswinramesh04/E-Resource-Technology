import { Col, Row } from "react-bootstrap";
import ButtonC from './Button';
import { BsCartPlusFill, BsFillCartCheckFill} from "react-icons/bs"
import "./Course.css";

export const Course = (props) => {
const {
  duration,
  in_cart,
  price,
  instructor_photo,
  title,
  instructor,
  course_thumbnail,
} = props;

return (
  <Col xl={4}>
    <div className="single-course">
      <img src={course_thumbnail} alt={title} />
      <div className="course-description">
        <h5>{title}</h5>
        <div className="instructor-info align-items-center">
          <div className="instructor-photo">
            <img src={instructor_photo} alt={instructor} />
          </div>
          <div className="instructor-name">
            <p>{instructor}</p>
          </div>
        </div>
        <div className="price-duration">
          <Row>
            <Col xl={6}>
              <p>
                <small>Price:     {price}            </small>
                <b />
              </p>
            </Col>
            <Col xl={6}>
              <p>
                {duration}
                <b></b>
              </p>
            </Col>
          </Row>
        </div>
        <div className="add-cart-btn text-center">
         
            {in_cart === false ?  (<ButtonC
              icon ={<BsCartPlusFill />}
              text="Add to Cart"
              onClick={() => {
                 props.addToCart(
                 props.Course,
                props.in_cart
                
                // stateChange();
                 );
              }}
            /> ): (
            <ButtonC icon={<BsFillCartCheckFill />} text="Added" /> 
            )}
                   
        </div>
      </div>
    </div>
  </Col>
);
};