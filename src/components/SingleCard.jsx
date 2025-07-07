import { Card, Col, Row } from "react-bootstrap";
import ButtonEditeForPost from "./actions/ButtonEditeForPost";
import { Link } from "react-router-dom";

function SingleCard(data,replacedData,deletedData) {
  return (
    <Card className="my-2" style={{ backgroundColor: "#1a1e21", color: "white" }}>
        
      <Card.Body>
      <Link to={`/posts/${data.data.id}/comments`}>
      <Row>
        <Card.Title>{data.data.title}</Card.Title>
        <Card.Text>{data.data.body}</Card.Text>
      </Row>
      </Link>
      <Row className="justify-content-end ">
          <Col className="d-flex justify-content-end" xs={2}>
            <ButtonEditeForPost replacedData={replacedData} />
          </Col>
          <Col className="d-flex justify-content-start" xs={2}>
            <button  type="submit" onClick={deletedData} className="cardButton px-4" style={{}}>
              Delete
            </button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
export default SingleCard;
