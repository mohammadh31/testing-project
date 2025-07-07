import { Card } from "react-bootstrap";

function SingleComment(data) {
  return (
    <Card className="my-2" style={{ backgroundColor: "#1a1e21", color: "white" }}>
      {/* <Card.Header>{data.data.id}</Card.Header> */}
      <Card.Body>
        <Card.Title>{data.data.name}</Card.Title>
        <Card.Text>{data.data.email}</Card.Text>
        <Card.Text>{data.data.body}</Card.Text>
      </Card.Body>
    </Card>
  );
}
export default SingleComment;
