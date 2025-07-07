import Loading from "./actions/loader/Loading";
import { Row } from "react-bootstrap";
import SingleUser from "./SingleUser";
import useAxios from "axios-hooks";

function Users() {
  const [{ data: getData, loading: getLoading, error: getError }, refetch] =
    useAxios({
      url: `https://jsonplaceholder.typicode.com/users`,
      method: "GET",
    });

  if (getLoading) {
    return (
      <div className="my-5 mx-auto" style={{ height: "70vh" }}>
        <Loading />
      </div>
    );
  }
  if (getError) {
    return (
      <Row className="my-3">
        <h1 className="text-center">Error: {getError.message}</h1>
        <button className="cardButton" style={{ maxWidth: "10%" }}>
          {refetch}Refetch
        </button>
      </Row>
    );
  }

  return (
    <div>
      <Row>
        <h1 className="text-center" style={{ color: "white" }}>
          The moste populer users
          <hr />
        </h1>
      </Row>
      <Row className="justify-content-center" style={{}}>
        {getData.map((data) => (
          <div id={"user" + data.id} style={{}} key={data.id}>
            <SingleUser data={data} />
          </div>
        ))}
      </Row>
    </div>
  );
}
export default Users;
