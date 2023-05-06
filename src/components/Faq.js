import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

const Faq = () => {
  return (
    <Container>
      <div className="faq-heading text-center">
        <h2>Frequently Asked Questions</h2>
      </div>
      <Accordion defaultActiveKey={["0"]} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h5>What is Bignr?</h5>
          </Accordion.Header>
          <Accordion.Body>
            Bignr is an online learning platform with On-demand skills Courses
            for creative and curious people, who wants to gain skills from the best instructor. On Bignr,
            you’ll find inspiration from hands-on classes and Content at the
            top of their creative fields, so you can take the next step in your
            creative journey.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h5>How Bignr is Different from other platforms?</h5>
          </Accordion.Header>
          <Accordion.Body>
            Users can learn at your own pace, Q/A page will be available, Chatbot facility, Search Engine, Recommendation System, On demand Premium Courses will be available and So on.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <h5>In future, What features can be added?</h5>
          </Accordion.Header>
          <Accordion.Body>
            A Seprate Page will be created for Students to upload their Study materials. So, everyone can access what material they need and can help others by uploading their materials also. 
            Code Editor can be prepared, where the students can learn and practice on same platform.
            Students to Students Communications, Students can teach and post video on our platform on any topics, where it will be a platform-friendly to every students who is learning.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
    

    
  );
};

export default Faq;