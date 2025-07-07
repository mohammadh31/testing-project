import { Card, Col, Row } from "react-bootstrap";
import ButtonFroEdit from "./actions/ButtonEdit";
import useAxios from "axios-hooks";
import { useParams } from "react-router-dom";
import Loading from "./actions/loader/Loading";

function SingleUser(data) {
  const { id } = useParams();
  const [{ data: putData, loading: putLoading, error: putError }, executePut] =
    useAxios(
      {
        url: `https://jsonplaceholder.typicode.com/users/${id}`,
        method: "PUT",
      },
      { manual: true }
    );
  // console.log(putData);
  const [{ data: deleteData}, executeDelete] =
  useAxios(
    {
      url: `https://jsonplaceholder.typicode.com/users/${id}`,
      method: "DELETE",
    },
    { manual: true }
  );

  // function for update data
  function updateData() {
    executePut({
      data: {
        ...putData.data,
        updatedAt: new Date().toISOString(),
      },
    });
  }
  // function for delete data
  function deletedData(event) {
    event.preventDefault();
    executeDelete({
      data: {
        ...deleteData,
        updatedAt: new Date().toISOString(),
      },
    });
  }

  if (putLoading) {
    return (
      <div className="my-5 mx-auto">
        <Loading />
      </div>
    );
  }
  if (putError) {
    return (
      <Row className="my-3">
        <h1 className="text-center">Error: {putError.message}</h1>
      </Row>
    );
  }
  return (
    <Card
      className="my-2"
      style={{
        backgroundColor: "#1a1e21",
        color: "white",
      }}
    >
      <Card.Body>
        <Row>
          <Card.Title> Name : {data.data.name}</Card.Title>
          <Card.Link>Email: {data.data.email}</Card.Link>
          <Card.Text>Phon : {data.data.phone}</Card.Text>
        </Row>
        <Row className="justify-content-end">
          <Col className="d-flex justify-content-end" xs={2}>
            <ButtonFroEdit updateData={updateData} />
          </Col>
          <Col className="d-flex justify-content-start" xs={2}>
            <button onClick={deletedData} type="submit" className="cardButton px-4" style={{}}>
              Delete
            </button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
export default SingleUser;
