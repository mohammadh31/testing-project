import { Col, Form, Row } from "react-bootstrap";
import Popup from "reactjs-popup";

function ButtonFroEdit(updateData) {
  return (
    <Popup
      className="popupAction"
      contentStyle={{
        boxShadow: "0 0 0 2000px rgba(0, 0, 0, 0.36)",
        backgroundColor: "#212529",
        border: "3px solid #3f7489",
        borderRadius: "20px",
        overflow: "hidden",
        maxWidth: "30%",
      }}
      trigger={<button type="submit" className="cardButton px-4">Edit</button>}
      modal
      nested
    >
      {(close) => (
        <Row className="popupAction d-flex justify-content-center p-3">
          <Row className="d-flex justify-content-center">
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                className="text-dark"
                placeholder="Enter name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                className="text-dark"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                className="text-dark"
                placeholder="Password"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicBody">
              <Form.Label>Body user</Form.Label>
              <Form.Control
                type="text"
                className="text-dark"
                placeholder="Note"
              />
            </Form.Group>
          </Row>
          <Row className="actions d-flex justify-content-end mt-4">
            <Col className="d-flex justify-content-end">
              <button type="submit" className="cardButton mx-3 px-3" onClick={updateData
              }>
                Edit user
              </button>
              <button
                className="cardButton px-3"
                type="submit"
                onClick={() => {
                  console.log("Popup closed");
                  close();
                }}
              >
                Close
              </button>
            </Col>
          </Row>
        </Row>
      )}
    </Popup>
  );
}
export default ButtonFroEdit;
